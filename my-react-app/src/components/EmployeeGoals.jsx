// import React, { useState } from 'react';
// import './EmployeeGoals.css';

// const EmployeeGoals = () => {
//   const [goals, setGoals] = useState([]);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newGoal, setNewGoal] = useState({
//     name: '',
//     employeeId: '',
//     department: '',
//     goalTitle: '',
//     targetDate: '',
//     status: 'Not Started',
//     progress: 0
//   });

//   React.useEffect(() => {
//     fetch('/api/employee-goals')
//       .then(res => res.json())
//       .then(data => setGoals(data))
//       .catch(() => setGoals([]));
//   }, []);

//   const handleAddGoal = () => {
//     if (newGoal.goalTitle && newGoal.name && newGoal.targetDate) {
//       fetch('/api/employee-goals', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newGoal)
//       })
//         .then(res => res.json())
//         .then(addedGoal => {
//           setGoals([...goals, addedGoal]);
//           setNewGoal({
//             name: '',
//             employeeId: '',
//             department: '',
//             goalTitle: '',
//             targetDate: '',
//             status: 'Not Started',
//             progress: 0
//           });
//           setShowAddForm(false);
//         });
//     }
//   };

//   return (
//     <div className="goals-container">
//       <h2 className="goals-title">Employee Goals</h2>

//       {/* Add Button */}
//       <div style={{ marginBottom: '20px' }}>
//         <button onClick={() => setShowAddForm(true)} className="add-goal-btn">
//           Add Goal
//         </button>
//       </div>

//       {/* Add Goal Form */}
//       {showAddForm && (
//         <div className="add-goal-form">
//           <h3>Add New Goal</h3>
//           <input
//             type="text"
//             placeholder="Employee Name"
//             value={newGoal.name}
//             onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Employee ID"
//             value={newGoal.employeeId}
//             onChange={(e) => setNewGoal({ ...newGoal, employeeId: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Department"
//             value={newGoal.department}
//             onChange={(e) => setNewGoal({ ...newGoal, department: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="Goal Title"
//             value={newGoal.goalTitle}
//             onChange={(e) => setNewGoal({ ...newGoal, goalTitle: e.target.value })}
//           />
//           <input
//             type="date"
//             value={newGoal.targetDate}
//             onChange={(e) => setNewGoal({ ...newGoal, targetDate: e.target.value })}
//           />
//           <input
//             type="number"
//             placeholder="Progress %"
//             min="0"
//             max="100"
//             value={newGoal.progress}
//             onChange={(e) => setNewGoal({ ...newGoal, progress: e.target.value })}
//           />
//           <div className="form-actions">
//             <button onClick={handleAddGoal}>Save</button>
//             <button onClick={() => setShowAddForm(false)}>Cancel</button>
//           </div>
//         </div>
//       )}

//       {/* Goals Table */}
//       <div className="goals-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Employee Name</th>
//               <th>Department</th>
//               <th>Goal</th>
//               <th>Target Date</th>
//               <th>Status</th>
//               <th>Progress</th>
//             </tr>
//           </thead>
//           <tbody>
//             {goals.map((goal, index) => (
//               <tr key={index}>
//                 <td>{goal.name}</td>
//                 <td>{goal.department}</td>
//                 <td>{goal.goalTitle}</td>
//                 <td>{goal.targetDate}</td>
//                 <td>
//                   <span className={`status ${goal.status.toLowerCase().replace(" ", "-")}`}>
//                     {goal.status}
//                   </span>
//                 </td>
//                 <td>
//                   <div className="progress-bar-wrapper">
//                     <div
//                       className="progress-bar-fill"
//                       style={{ width: `${goal.progress}%` }}
//                     >
//                       <span className="progress-text">{goal.progress}%</span>
//                     </div>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EmployeeGoals;
import React, { useState, useEffect } from 'react';
import './EmployeeGoals.css';

const EmployeeGoals = () => {
  const [goals, setGoals] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    name: '',
    employeeId: '',
    goalTitle: '',
    targetDate: '',
    status: 'Not Started',
    progress: 0,
  });

  useEffect(() => {
    fetch('/api/employee-goals')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched goals:', data);
        setGoals(data);
      })
      .catch(err => {
        console.error('Error fetching goals:', err);
        setGoals([]);
      });
  }, []);

  const handleAddGoal = () => {
    if (newGoal.goalTitle && newGoal.name && newGoal.targetDate) {
      fetch('/api/employee-goals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGoal),
      })
        .then(res => res.json())
        .then(addedGoal => {
          setGoals([...goals, addedGoal]);
          setNewGoal({
            name: '',
            employeeId: '',
            goalTitle: '',
            targetDate: '',
            status: 'Not Started',
            progress: 0,
          });
          setShowAddForm(false);
        });
    }
  };

  return (
    <div className="goals-container">
      <h2 className="goals-title">Employee Goals</h2>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setShowAddForm(true)} className="add-goal-btn">
          Add Goal
        </button>
      </div>

      {showAddForm && (
        <div className="add-goal-form">
          {/* Add form inputs here */}
        </div>
      )}

      <div className="goals-table">
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Goal</th>
              <th>Target Date</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
  {goals.length === 0 ? (
    <tr>
      <td colSpan="6" style={{ textAlign: 'center' }}>
        No goals available.
      </td>
    </tr>
  ) : (
    goals.map((goal, index) => (
      <tr key={goal.id || index}>
        <td>{goal.employee?.name}</td>
        <td>{goal.employee?.department?.name}</td>
        <td>{goal.goalTitle}</td>
        <td>{new Date(goal.deadline).toLocaleDateString()}</td>
        <td>{goal.status}</td>
        <td>{goal.progress}%</td>
      </tr>
    ))
  )}
</tbody>

          {/* <tbody>
            {goals.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>
                  No goals available.
                </td>
              </tr>
            ) : (
              goals.map((goal, index) => (
                <tr key={goal.id || index}>
                  <td>{goal.name}</td>
                  <td>{goal.employee?.department?.name || 'N/A'}</td>
                  <td>{goal.goalTitle}</td>
                  <td>{goal.deadline ? new Date(goal.deadline).toLocaleDateString() : 'N/A'}</td>
                  <td>
                    <span className={`status ${goal.status.toLowerCase().replace(" ", "-")}`}>
                      {goal.status}
                    </span>
                  </td>
                  <td>
                    <div className="progress-bar-wrapper">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${goal.progress}%` }}
                      >
                        <span className="progress-text">{goal.progress}%</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody> */}
          <tbody>
  {goals.length === 0 ? (
    <tr>
      <td colSpan="6" style={{ textAlign: 'center' }}>
        No goals available.
      </td>
    </tr>
  ) : (
    goals.map((goal, index) => (
      <tr key={goal.id || index}>
        <td>{goal.employee?.name}</td>
        <td>{goal.employee?.department?.name}</td>
        <td>{goal.goalTitle}</td>
        <td>{new Date(goal.deadline).toLocaleDateString()}</td>
        <td>{goal.status}</td>
        <td>{goal.progress}%</td>
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default EmployeeGoals;
