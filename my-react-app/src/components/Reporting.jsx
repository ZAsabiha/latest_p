import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Users,
  Clock,
  DollarSign,
  TrendingUp,
  FileText,
  Download,
  Filter,
  Search,
  RefreshCw,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import './Reporting.css';
const Reporting = () => {
  const [recentReports, setRecentReports] = useState([
    {
      id: 'att-001',
      name: 'Monthly Attendance Summary',
      type: 'attendance',
      date: '2025-07-13',
      status: 'completed',
      size: '2.3 MB',
      downloads: 45
    },
    {
      id: 'leave-002',
      name: 'Annual Leave Balance Report',
      type: 'leave',
      date: '2025-07-12',
      status: 'completed',
      size: '1.2 MB',
      downloads: 30
    },
    {
      id: 'pay-003',
      name: 'Q2 Payroll Summary',
      type: 'payroll',
      date: '2025-07-10',
      status: 'processing',
      size: '3.5 MB',
      downloads: 20
    },
    {
      id: 'access-004',
      name: 'Access Logs & Security Report',
      type: 'access',
      date: '2025-07-09',
      status: 'completed',
      size: '2.0 MB',
      downloads: 15
    },
    {
      id: 'perf-005',
      name: 'Performance Review Overview',
      type: 'performance',
      date: '2025-07-07',
      status: 'completed',
      size: '2.8 MB',
      downloads: 25
    },
    {
      id: 'comp-006',
      name: 'Compliance Audit Report',
      type: 'compliance',
      date: '2025-07-06',
      status: 'completed',
      size: '1.9 MB',
      downloads: 12
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);

  const stats = [
    { label: 'Total Reports', value: '54', change: '+12%', icon: FileText },
    { label: 'Attendance Reports', value: '12', change: '+5%', icon: Calendar },
    { label: 'Leave Reports', value: '9', change: '+3%', icon: Clock },
    { label: 'Payroll Reports', value: '8', change: '+2%', icon: DollarSign },
    { label: 'Access Logs', value: '5', change: '+1%', icon: ShieldCheck },
    { label: 'Performance Reviews', value: '6', change: '+4%', icon: TrendingUp },
    { label: 'Compliance Reports', value: '7', change: '+2%', icon: Briefcase },
    { label: 'Downloads', value: '147', change: '+24%', icon: Download }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentReports(prev =>
        prev.map(report =>
          report.status === 'processing' && Math.random() > 0.7
            ? { ...report, status: 'completed' }
            : report
        )
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const filteredReports = recentReports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || report.type.toLowerCase() === filterType;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => (
    <span className={`status-badge ${status}`}>
      <span className="dot"></span>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );

  return (
    <div className="reporting-container">
      <div className="page-header">
        <h1>Reports & Analytics</h1>
        <p>Generate comprehensive reports and insights for your organization</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-info">
              <p className="label">
  <stat.icon size={16} style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />
  {stat.label}
</p>

              <p className="value">{stat.value}</p>
              <p className={`change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                {stat.change} from last month
              </p>
            </div>
            <div className="stat-icon">
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      <div className="recent-reports">
        <div className="table-header">
          <h2>Recent Reports</h2>
          <input
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="attendance">Attendance</option>
            <option value="leave">Leave</option>
            <option value="payroll">Payroll</option>
            <option value="access">Access</option>
            <option value="performance">Performance</option>
            <option value="compliance">Compliance</option>
          </select>
        </div>

        <table className="reports-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
              <th>Size</th>
              <th>Downloads</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id}>
                <td>{report.name}</td>
                <td>{report.type.charAt(0).toUpperCase() + report.type.slice(1)}</td>
                <td>{report.date}</td>
                <td>{getStatusBadge(report.status)}</td>
                <td>{report.size}</td>
                <td>{report.downloads}</td>
                <td>
                  <button
                    disabled={report.status !== 'completed'}
                    className={`download-btn ${report.status !== 'completed' ? 'disabled' : ''}`}
                  >
                    <Download size={16} />
                  </button>
                  <button className="preview-btn">
                    <FileText size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        
      `}</style>
    </div>
  );
};

export default Reporting;