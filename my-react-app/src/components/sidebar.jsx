import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import "./Sidebar.css";
import { MdFeaturedPlayList, MdOutlinePerson, MdPayments, MdDashboardCustomize, MdOutlineSystemUpdateAlt } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { GiThreeLeaves } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdPendingActions } from "react-icons/md";

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate(); // ✅ get navigate function

  const [expandedSections, setExpandedSections] = useState({
    employeeManagement: false,
    attendanceLeave: true,
    payrollCompensations: false,
    performance: false,
    recruitment: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleLogoutClick = () => {
    if (onLogout) onLogout(); // call parent logout
    navigate("/"); // ✅ navigate to landing page
  };


  return (
    <div className="sidebar">
      <div className="sidebar-title">HR CORE</div>
      <ul className="sidebar-menu">

        {/* Dashboard */}
        <li className="menu-item">
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MdDashboardCustomize style={{ marginRight: '13px', fontSize: '24px' }} />
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Dashboard</span>
          </Link>
        </li>

        <li className="menu-item">
          <MdFeaturedPlayList style={{ marginRight: '13px', fontSize: '24px' }} />
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Features</span>
        </li>

        {/* Employee Management */}
        <li className="menu-section">
          <div className="menu-section-header" onClick={() => toggleSection("employeeManagement")}>
            <BsPerson style={{ marginRight: '13px', fontSize: '24px' }} />
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Employee Management</span>
            <i className={`bi bi-chevron-${expandedSections.employeeManagement ? "down" : "right"} chevron`}></i>
          </div>
          {expandedSections.employeeManagement && (
            <ul className="submenu">
              <li className="submenu-item">
                <Link to="/EmployeeList" style={{ textDecoration: 'none', color: 'inherit' }}>Employees</Link>
              </li>
              <li className="submenu-item">
                <Link to="/AdminProfile" style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Attendance and Leave */}
        <li className="menu-section">
          <div className="menu-section-header" onClick={() => toggleSection("attendanceLeave")}>
            <MdFeaturedPlayList style={{ marginRight: '13px', fontSize: '24px' }} />
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Attendance and Leave</span>
            <i className={`bi bi-chevron-${expandedSections.attendanceLeave ? "down" : "right"} chevron`}></i>
          </div>
          {expandedSections.attendanceLeave && (
            <ul className="submenu">
              <li className="submenu-item">
                <Link to="/attendance" style={{ textDecoration: 'none', color: 'inherit' }}>Attendance Logs</Link>
              </li>
              <li className="submenu-item">
                <Link to="/leave-requests" style={{ textDecoration: 'none', color: 'inherit' }}>Leave Requests</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Payroll and Compensations */}
        <li className="menu-section">
          <div className="menu-section-header" onClick={() => toggleSection("payrollCompensations")}>
            <MdPayments style={{ marginRight: '13px', fontSize: '24px' }} />
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Payroll and Compensations</span>
            <i className={`bi bi-chevron-${expandedSections.payrollCompensations ? "down" : "right"} chevron`}></i>
          </div>
          {expandedSections.payrollCompensations && (
            <ul className="submenu">
              <li className="submenu-item">
                <Link to="/Salary" style={{ textDecoration: 'none', color: 'inherit' }}>Salary Management</Link>
              </li>
              <li className="submenu-item">
                <Link to="/overtime" style={{ textDecoration: 'none', color: 'inherit' }}>Overtime Tracking</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Performance */}
        <li className="menu-section">
          <div className="menu-section-header" onClick={() => toggleSection("performance")}>
            <GrDocumentPerformance style={{ marginRight: '13px', fontSize: '24px' }} />
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Performance</span>
            <i className={`bi bi-chevron-${expandedSections.performance ? "down" : "right"} chevron`}></i>
          </div>
          {expandedSections.performance && (
            <ul className="submenu">
              <li className="submenu-item">
                <Link to="/EmployeeGoals" style={{ textDecoration: 'none', color: 'inherit' }}>Goals</Link>
              </li>
              <li className="submenu-item">
                <Link to="/PerformanceReview" style={{ textDecoration: 'none', color: 'inherit' }}>Performance Reviews</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Recruitment */}
        <li className="menu-section">
          <div className="menu-section-header" onClick={() => toggleSection("recruitment")}>
            <MdPayments style={{ marginRight: '13px', fontSize: '24px' }} />
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Recruitment</span>
            <i className={`bi bi-chevron-${expandedSections.recruitment ? "down" : "right"} chevron`}></i>
          </div>
          {expandedSections.recruitment && (
            <ul className="submenu">
              <li className="submenu-item">
                <Link to="/Candidates" style={{ textDecoration: 'none', color: 'inherit' }}>Candidates</Link>
              </li>
              <li className="submenu-item">
                <Link to="/JobPostings" style={{ textDecoration: 'none', color: 'inherit' }}>Job Postings</Link>
              </li>
            </ul>
          )}
        </li>

        {/* System Settings */}
        <li className="menu-item">
          <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
            <MdOutlineSystemUpdateAlt style={{ marginRight: '13px', fontSize: '24px' }} />
            <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Systems and Settings</span>
          </Link>
        </li>

        {/* Logout */}
        <li onClick={handleLogoutClick} className="menu-item logout-btn" style={{ cursor: "pointer" }}>
          <AiOutlineLogout style={{ marginRight: '13px', fontSize: '24px' }} />
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
