// import React from 'react';
// import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Sidebar from './components/sidebar';
// import EmployeeListPage from './components/EmployeeListPage';
// import Profile from './components/ViewEmployee';
// import EmployeeGoals from './components/EmployeeGoals';
// import PerformanceReview from './components/PerformanceReview';
// import LeaveRequests from './components/LeaveRequests';
// import CandidatesPage from './CandidatesPage';
// import JobPostingsPage from './JobPostingsPage';
// import Salary from './components/Salary';
// import AdminProfile from './components/AdminProfile';
// import ViewEmployee from './components/ViewEmployee';
// import LoginForm from './components/LoginForm';
// import LandingPage from './components/LandingPage';
// import AttendanceLogs from './components/AttendanceLogs';

// import AboutPage from './components/AboutPage';
// import ContactPage from './components/ContactPage';
// import './RecruitmentDashboard.css';

// // ✅ Move handleLogout into a separate component so it has access to useNavigate
// const LayoutWithSidebar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log("Logged out");
//     // Perform logout logic here (clear tokens, etc.)
//     navigate('/'); // Redirect to LandingPage
//   };

//   return (
//     <div className="app-layout">
//       <Sidebar onLogout={handleLogout} />

//       <div className="main-dashboard">
//         {/* Top Navigation */}
//         <div className="top-navigation">
//           <div className="nav-links">
//            <button className="nav-link logout-btn" onClick={handleLogout}>
//               Home
//             </button>
//             <Link to="/about" className="nav-link">About</Link>
//             <Link to="/contact" className="nav-link">Contacts</Link>
//             <button className="nav-link logout-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* Nested Routes */}
//         <Routes>
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/EmployeeList" element={<EmployeeListPage />} />
//           <Route path="/employee/:id" element={<ViewEmployee />} />
//           <Route path="/AdminProfile" element={<AdminProfile />} />
//           <Route path="/EmployeeGoals" element={<EmployeeGoals />} />
//           <Route path="/Candidates" element={<CandidatesPage />} />
//           <Route path="/JobPostings" element={<JobPostingsPage />} />
//           <Route path="/leave-requests" element={<LeaveRequests />} />
//           <Route path="/attendance" element={<AttendanceLogs />} />
//           <Route path="/PerformanceReview" element={<PerformanceReview />} />
//           <Route path="/Salary" element={<Salary />} />
//           <Route path="*" element={<h2>Page Not Found</h2>} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Pages WITHOUT sidebar */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LoginForm />} />

//         {/* Pages WITH sidebar */}
//         <Route path="*" element={<LayoutWithSidebar />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar';
import EmployeeListPage from './components/EmployeeListPage';
import Profile from './components/ViewEmployee';
import EmployeeGoals from './components/EmployeeGoals';
import PerformanceReview from './components/PerformanceReview';
import LeaveRequests from './components/LeaveRequests';
import CandidatesPage from './CandidatesPage';
import JobPostingsPage from './JobPostingsPage';
import Salary from './components/Salary';
import AdminProfile from './components/AdminProfile';
import ViewEmployee from './components/ViewEmployee';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import AttendanceLogs from './components/AttendanceLogs';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import './RecruitmentDashboard.css';

const LayoutWithSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:5000/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (err) {
      console.error('Logout failed:', err);
    }
    navigate('/login');
  };

  return (
    <div className="app-layout">
      <Sidebar onLogout={handleLogout} />

      <div className="main-dashboard">
        <div className="top-navigation">
          <div className="nav-links">
            <button className="nav-link logout-btn" onClick={() => navigate('/')}>
              Home
            </button>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contacts</Link>
            <button className="nav-link logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/EmployeeList" element={<EmployeeListPage />} />
          <Route path="/employee/:id" element={<ViewEmployee />} />
          <Route path="/AdminProfile" element={<AdminProfile />} />
          <Route path="/EmployeeGoals" element={<EmployeeGoals />} />
          <Route path="/Candidates" element={<CandidatesPage />} />
          <Route path="/JobPostings" element={<JobPostingsPage />} />
          <Route path="/leave-requests" element={<LeaveRequests />} />
          <Route path="/attendance" element={<AttendanceLogs />} />
          <Route path="/PerformanceReview" element={<PerformanceReview />} />
          <Route path="/Salary" element={<Salary />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // Don't run on landing or login page
    if (location.pathname === '/' || location.pathname === '/login') {
      setCheckingAuth(false);
      return;
    }

    fetch('http://localhost:5000/auth/status', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.loggedIn) {
          console.log('Still logged in:', data.user);
        } else {
          navigate('/login');
        }
      })
      .catch(err => {
        console.error('Auth check failed:', err);
        navigate('/login');
      })
      .finally(() => setCheckingAuth(false));
  }, [location.pathname, navigate]);

  if (checkingAuth) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<LayoutWithSidebar />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
