// import React, { useState, useEffect } from 'react';
// import './SearchBar.css';
// import { IoMdMenu } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";

// function useEmployees() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     async function fetchEmployees() {
//       try {
//         const response = await fetch('/api/employees');
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         console.error('Failed to fetch employees:', error);
//       }
//     }

//     fetchEmployees();
//   }, []);

//   return employees;
// }

// function SearchBar() {
//   const employees = useEmployees();  // ✅ NOW INSIDE THE COMPONENT!

//   const [searchTerm, setSearchTerm] = useState('');

//   const filtered = searchTerm.trim() !== ''
//     ? employees.filter(emp =>
//         emp.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];

//   return (
//     <div className="search-container" style={{ padding: '20px', fontSize: '18px' }}>
//       <label
//         htmlFor="search-input"
//         className="search-label"
//         style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}
//       >
//         <IoMdMenu style={{ marginRight: '7px', fontSize: '35px' }} />
//         Search Employees
//         <CiSearch style={{ marginLeft: '13px', fontSize: '24px' }} />
//       </label>

//       <input
//         id="search-input"
//         type="text"
//         className="search-input"
//         placeholder="Search employees..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ padding: '10px', fontSize: '16px', width: '100%', marginTop: '10px' }}
//       />

//       <ul className="search-results" style={{ marginTop: '15px', fontSize: '16px' }}>
//         {filtered.length > 0 ? (
//           filtered.map((emp) => (
//             <li
//               key={emp.id}
//               className="result-item"
//               style={{ padding: '8px', borderBottom: '1px solid #ccc' }}
//             >
//               {emp.name}
//             </li>
//           ))
//         ) : (
//           searchTerm.trim() !== '' && (
//             <li className="no-results" style={{ padding: '8px', color: 'red' }}>
//               No employees found.
//             </li>
//           )
//         )}
//       </ul>
//     </div>
//   );
// }

// export default SearchBar;

import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounced search (optional for performance)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() === '') {
        setResults([]);
        return;
      }

      const fetchSearchResults = async () => {
        try {
          setLoading(true);
          const response = await fetch(`/api/employees/search?name=${encodeURIComponent(searchTerm)}`);
          const data = await response.json();
          setResults(data);
        } catch (error) {
          console.error('Search failed:', error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      };

      fetchSearchResults();
    }, 300); // 300ms debounce

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="search-container" style={{ padding: '20px', fontSize: '18px' }}>
      <label
        htmlFor="search-input"
        className="search-label"
        style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}
      >
        <IoMdMenu style={{ marginRight: '7px', fontSize: '35px' }} />
        Search Employees
        <CiSearch style={{ marginLeft: '13px', fontSize: '24px' }} />
      </label>

      <input
        id="search-input"
        type="text"
        className="search-input"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '100%', marginTop: '10px' }}
      />

      <ul className="search-results" style={{ marginTop: '15px', fontSize: '16px' }}>
        {loading ? (
          <li style={{ padding: '8px', color: 'gray' }}>Searching...</li>
        ) : results.length > 0 ? (
          results.map((emp) => (
            <li
              key={emp.id}
              className="result-item"
              style={{ padding: '8px', borderBottom: '1px solid #ccc' }}
            >
              {emp.name} – {emp.email}
            </li>
          ))
        ) : (
          searchTerm.trim() !== '' && (
            <li className="no-results" style={{ padding: '8px', color: 'red' }}>
              No employees found.
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default SearchBar;
