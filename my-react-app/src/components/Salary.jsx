import React, { useState, useEffect } from 'react';
import './Salary.css';

const Salary = () => {
  const [formData, setFormData] = useState({
    department: '',
    employee: '',
    basicSalary: '',
    allowances: '',
    deductions: '',
    payDate: '',
  });

  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch departments on mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/salaries/dropdown/departments');
        const data = await res.json();
        if (data.success) {
          setDepartments(data.data);
          // Automatically select first department
          if (data.data.length > 0) {
            setFormData(prev => ({ ...prev, department: data.data[0].id }));
          }
        } else {
          console.error('Error loading departments', data.message);
        }
      } catch (err) {
        console.error('Error fetching departments', err);
      }
    };

    fetchDepartments();
  }, []);

  // Fetch employees when department changes
  useEffect(() => {
    if (!formData.department) return;

    const fetchEmployees = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/salaries/dropdown/employees?departmentId=${formData.department}`
        );
        const data = await res.json();
        if (data.success) {
          setEmployees(data.data);
        } else {
          console.error('Error loading employees', data.message);
        }
      } catch (err) {
        console.error('Error fetching employees', err);
      }
    };

    fetchEmployees();
  }, [formData.department]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const payload = {
        employee: formData.employee,
        baseSalary: formData.basicSalary,
        allowances: formData.allowances,
        deductions: formData.deductions,
        payDate: formData.payDate
      };

      const response = await fetch('http://localhost:5000/api/salaries', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Salary updated successfully!');
        setFormData({
          department: formData.department,
          employee: '',
          basicSalary: '',
          allowances: '',
          deductions: '',
          payDate: '',
        });
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage('Error submitting salary');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="salary-form-container">
      <h2 className="salary-form-title">Salary Management</h2>
      <form onSubmit={handleSubmit} className="salary-form">
        
        <div className="salary-form-group">
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            {departments.map(dept => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        <div className="salary-form-group">
          <label>Employee</label>
          <select
            name="employee"
            value={formData.employee}
            onChange={handleChange}
          >
            <option value="">Select Employee</option>
            {employees.map(emp => (
              <option key={emp.id} value={emp.id}>
                {emp.name} ({emp.department?.name})
              </option>
            ))}
          </select>
        </div>

        <div className="salary-form-group">
          <label>Basic Salary</label>
          <input
            type="number"
            name="basicSalary"
            value={formData.basicSalary}
            onChange={handleChange}
            placeholder="Insert Salary"
          />
        </div>

        <div className="salary-form-group">
          <label>Allowances</label>
          <input
            type="number"
            name="allowances"
            value={formData.allowances}
            onChange={handleChange}
            placeholder="Monthly Allowances"
          />
        </div>

        <div className="salary-form-group">
          <label>Deductions</label>
          <input
            type="number"
            name="deductions"
            value={formData.deductions}
            onChange={handleChange}
            placeholder="Monthly Deductions"
          />
        </div>

        <div className="salary-form-group">
          <label>Pay Date</label>
          <input
            type="date"
            name="payDate"
            value={formData.payDate}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="salary-submit-btn" disabled={loading}>
          {loading ? 'Adding...' : 'Update Salary'}
        </button>
      </form>

      {message && <p className="salary-message">{message}</p>}
    </div>
  );
};

export default Salary;

// Salary.jsx
