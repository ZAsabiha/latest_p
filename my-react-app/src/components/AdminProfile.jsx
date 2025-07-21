// import React, { useState } from "react";

// const AdminProfile = () => {
//   // Hardcoded admin data
//   const [profileData] = useState({
//     name: "System Admin",
//     position: "System Administrator",
//     employeeId: "ADM12345",
//     email: "alex.johnson@example.com",
//     phone: "+1 (555) 123-4567",
//     department: "IT & Infrastructure"
//   });

//   const mainStyles = {
//     container: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'flex-start',
//       padding: '40px',
//       backgroundColor: '#f8f9fa',
//       fontFamily: 'Arial, sans-serif',
//       minHeight: '100vh'
//     },
//     content: {
//       maxWidth: '700px',
//       width: '100%',
//     },
//     header: {
//       marginBottom: '30px'
//     },
//     title: {
//       fontSize: '32px',
//       fontWeight: 'bold',
//       color: '#2c3e50',
//       marginBottom: '10px'
//     },
//     subtitle: {
//       fontSize: '16px',
//       color: '#7f8c8d'
//     },
//     profileCard: {
//       backgroundColor: 'white',
//       borderRadius: '12px',
//       padding: '30px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
//     },
//     profileHeader: {
//       textAlign: 'center',
//       marginBottom: '30px'
//     },
//     avatar: {
//       width: '80px',
//       height: '80px',
//       borderRadius: '50%',
//       backgroundColor: '#276f82',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '32px',
//       color: 'white',
//       margin: '0 auto 20px'
//     },
//     profileName: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       color: '#2c3e50',
//       marginBottom: '5px'
//     },
//     profileRole: {
//       fontSize: '16px',
//       color: '#7f8c8d'
//     },
//     detailsContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '15px'
//     },
//     detailRow: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '10px 0',
//       borderBottom: '1px solid #ecf0f1'
//     },
//     detailLabel: {
//       fontSize: '14px',
//       fontWeight: '600',
//       color: '#7f8c8d'
//     },
//     detailValue: {
//       fontSize: '14px',
//       color: '#2c3e50'
//     }
//   };

//   return (
//     <div style={mainStyles.container}>
//       <div style={mainStyles.content}>
//         <div style={mainStyles.header}>
//           <h1 style={mainStyles.title}>Admin Profile</h1>
//           <p style={mainStyles.subtitle}>Your account information</p>
//         </div>

//         <div style={mainStyles.profileCard}>
//           <div style={mainStyles.profileHeader}>
//             <div style={mainStyles.avatar}>
//               <span>{profileData.name.split(' ').map(n => n[0]).join('')}</span>
//             </div>
//             <h2 style={mainStyles.profileName}>{profileData.name}</h2>
//             <p style={mainStyles.profileRole}>{profileData.position}</p>
//           </div>

//           <div style={mainStyles.detailsContainer}>
//             <div style={mainStyles.detailRow}>
//               <span style={mainStyles.detailLabel}>Employee ID</span>
//               <span style={mainStyles.detailValue}>{profileData.employeeId}</span>
//             </div>
//             <div style={mainStyles.detailRow}>
//               <span style={mainStyles.detailLabel}>Email</span>
//               <span style={mainStyles.detailValue}>{profileData.email}</span>
//             </div>
//             <div style={mainStyles.detailRow}>
//               <span style={mainStyles.detailLabel}>Phone</span>
//               <span style={mainStyles.detailValue}>{profileData.phone}</span>
//             </div>
//             <div style={mainStyles.detailRow}>
//               <span style={mainStyles.detailLabel}>Department</span>
//               <span style={mainStyles.detailValue}>{profileData.department}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminProfile;
// import React, { useState, useEffect } from 'react';

// const AdminProfile = () => {
//   const [profileData, setProfileData] = useState({
//     name: "John Anderson",
//     title: "System Administrator",
//     email: "john.anderson@company.com",
//     phone: "+1 (555) 123-4567",
//     department: "IT Administration",
//     employeeId: "EMP-2024-001",
//     joinDate: "January 15, 2020",
//     location: "New York, NY",
//     accessLevel: "Super Administrator",
//     profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
//   });

//   const [stats] = useState([
//     { number: "1,247", label: "Users Managed" },
//     { number: "98.5%", label: "System Uptime" },
//     { number: "24", label: "Active Projects" },
//     { number: "156", label: "Tickets Resolved" }
//   ]);

//   const [skills] = useState([
//     "System Administration", "Network Security", "Linux/Unix", "Cloud Computing",
//     "Database Management", "Python", "DevOps", "Cybersecurity", "Project Management", "Team Leadership"
//   ]);

//   const [activities] = useState([
//     {
//       title: "System Maintenance Completed",
//       time: "2 hours ago",
//       description: "Successfully completed scheduled maintenance on production servers. All systems are now running optimally."
//     },
//     {
//       title: "New User Accounts Created",
//       time: "1 day ago",
//       description: "Created 15 new user accounts for the marketing department and assigned appropriate access permissions."
//     },
//     {
//       title: "Security Audit Completed",
//       time: "3 days ago",
//       description: "Conducted comprehensive security audit across all systems. Identified and resolved 3 minor vulnerabilities."
//     },
//     {
//       title: "Database Backup Verified",
//       time: "5 days ago",
//       description: "Verified integrity of all database backups. All backup procedures are functioning correctly."
//     }
//   ]);

//   const [animatedCards, setAnimatedCards] = useState([]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setAnimatedCards(new Array(stats.length + activities.length).fill(true));
//     }, 100);
//     return () => clearTimeout(timer);
//   }, [stats.length, activities.length]);

//   const handleEditProfile = () => {
//     alert('Edit Profile functionality would open here!\n\nThis could include:\n- Personal information editing\n- Skills management\n- Profile picture upload\n- Access level modifications');
//   };

//   const handleViewSettings = () => {
//     alert('Settings panel would open here!\n\nThis could include:\n- System preferences\n- Security settings\n- Notification preferences\n- Theme customization');
//   };

//   const handleViewReports = () => {
//     alert('Reports dashboard would open here!\n\nThis could include:\n- User activity reports\n- System performance metrics\n- Security logs\n- Analytics dashboard');
//   };

//   const StatCard = ({ stat, index }) => (
//     <div 
//       className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-200 ${
//         animatedCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//       }`}
//       style={{
//         transitionDelay: `${index * 100}ms`
//       }}
//     >
//       <div className="text-3xl font-bold mb-2" style={{ color: '#276f82' }}>{stat.number}</div>
//       <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
//     </div>
//   );

//   const InfoCard = ({ title, children }) => (
//     <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
//       <h3 className="text-lg font-semibold mb-4" style={{ color: '#276f82' }}>{title}</h3>
//       {children}
//     </div>
//   );

//   const InfoItem = ({ label, value }) => (
//     <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
//       <span className="font-semibold text-gray-600">{label}</span>
//       <span className="text-gray-800 font-medium">{value}</span>
//     </div>
//   );

//   const SkillTag = ({ skill }) => (
//     <span className="inline-block text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" 
//           style={{ background: `linear-gradient(135deg, #276f82, #1e5a6b, #2d7a94)` }}>
//       {skill}
//     </span>
//   );

//   const ActivityItem = ({ activity, index }) => (
//     <div 
//       className={`bg-white rounded-xl p-5 mb-4 shadow-lg transition-all duration-300 hover:translate-x-1 hover:shadow-xl border-l-4 ${
//         animatedCards[stats.length + index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
//       }`}
//       style={{
//         transitionDelay: `${(stats.length + index) * 100}ms`,
//         borderLeftColor: '#276f82'
//       }}
//     >
//       <div className="flex justify-between items-center mb-2">
//         <h4 className="font-semibold text-gray-800">{activity.title}</h4>
//         <span className="text-sm text-gray-600">{activity.time}</span>
//       </div>
//       <p className="text-gray-600 leading-relaxed">{activity.description}</p>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-white p-5" style={{ marginLeft: '280px' }}>
//       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-br from-[#276f82] via-[#2d7a94] to-[#337d91] text-white p-10 text-center relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-30 animate-pulse"></div>
//           <div className="relative z-10">
//             <div className="w-32 h-32 mx-auto mb-5 rounded-full border-4 border-white/30 overflow-hidden shadow-lg">
//               <img 
//                 src={profileData.profileImage} 
//                 alt="Admin Profile" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h1 className="text-4xl font-bold mb-2">{profileData.name}</h1>
//             <p className="text-lg opacity-90">{profileData.title}</p>
//             <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mt-4 backdrop-blur-sm">
//               🔐 Super Admin Access
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-10">
//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//             {stats.map((stat, index) => (
//               <StatCard key={index} stat={stat} index={index} />
//             ))}
//           </div>

//           {/* Personal Information */}
//           <div className="mb-10">
//             <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
//               <div className="w-1 h-6 rounded" style={{ background: `linear-gradient(to bottom, #276f82, #1e5a6b)` }}></div>
//               Personal Information
//             </h2>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <InfoCard title="Basic Information">
//                 <InfoItem label="Full Name" value={profileData.name} />
//                 <InfoItem label="Email" value={profileData.email} />
//                 <InfoItem label="Phone" value={profileData.phone} />
//                 <InfoItem label="Department" value={profileData.department} />
//               </InfoCard>
//               <InfoCard title="Work Information">
//                 <InfoItem label="Employee ID" value={profileData.employeeId} />
//                 <InfoItem label="Join Date" value={profileData.joinDate} />
//                 <InfoItem label="Location" value={profileData.location} />
//                 <InfoItem label="Access Level" value={profileData.accessLevel} />
//               </InfoCard>
//             </div>
//           </div>

//           {/* Skills */}
//           <div className="mb-10">
//             <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
//               <div className="w-1 h-6 rounded" style={{ background: `linear-gradient(to bottom, #276f82, #1e5a6b)` }}></div>
//               Skills & Expertise
//             </h2>
//             <div className="flex flex-wrap gap-3">
//               {skills.map((skill, index) => (
//                 <SkillTag key={index} skill={skill} />
//               ))}
//             </div>
//           </div>

//           {/* Recent Activity */}
//           <div className="mb-10">
//             <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
//               <div className="w-1 h-6 rounded" style={{ background: `linear-gradient(to bottom, #276f82, #1e5a6b)` }}></div>
//               Recent Activity
//             </h2>
//             <div>
//               {activities.map((activity, index) => (
//                 <ActivityItem key={index} activity={activity} index={index} />
//               ))}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap justify-center gap-4">
//             <button
//               onClick={handleEditProfile}
//               className="text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-md"
//               style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
//             >
//               ✏️ Edit Profile
//             </button>
//             <button
//               onClick={handleViewSettings}
//               className="text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-md"
//               style={{ background: 'linear-gradient(135deg, #6b7280, #4b5563)' }}
//             >
//               ⚙️ Settings
//             </button>
//             <button
//               onClick={handleViewReports}
//               className="text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-md"
//               style={{ background: 'linear-gradient(135deg, #276f82, #1e5a6b)' }}
//             >
//               📊 View Reports
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminProfile;
import React, { useState } from "react";

const AdminProfile = () => {
    const [profileData] = useState({
        name: "Mrittika Jahan",
        title: "System Administrator",
        email: "mrittikajahan@company.com",
        phone: "+1 (555) 123-4567",
        department: "IT Administration",
        employeeId: "EMP-2024-001",
        joinDate: "January 15, 2020",
        location: "New York, NY",
        accessLevel: "Super Administrator"
    });

    const [stats] = useState([
        { number: "1,247", label: "Users Managed" },
        { number: "98.5%", label: "System Uptime" },
        { number: "24", label: "Active Projects" },
        { number: "156", label: "Tickets Resolved" }
    ]);

    const [skills] = useState([
        "System Administration", "Network Security", "Linux/Unix", "Cloud Computing",
        "Database Management", "Python", "DevOps", "Cybersecurity", "Project Management", "Team Leadership"
    ]);

    const [activities] = useState([
        {
            title: "System Maintenance Completed",
            time: "2 hours ago",
            description: "Successfully completed scheduled maintenance on production servers."
        },
        {
            title: "New User Accounts Created",
            time: "1 day ago",
            description: "Created 15 new user accounts for marketing department."
        },
        {
            title: "Security Audit Completed",
            time: "3 days ago",
            description: "Resolved 3 minor vulnerabilities found in audit."
        },
        {
            title: "Database Backup Verified",
            time: "5 days ago",
            description: "Verified all database backups are intact and secure."
        }
    ]);

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            padding: '40px 0',
            backgroundColor: '#f8f9fa',
            fontFamily: 'Arial, sans-serif',
            minHeight: '100vh'
        },
        content: {
            maxWidth: '950px', // increased width
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: '14px',
            padding: '40px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        },
        header: {
            textAlign: 'center',
            marginBottom: '32px'
        },
        avatar: {
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            backgroundColor: '#276f82',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#fff',
            margin: '0 auto 16px'
        },
        name: {
            fontSize: '26px',
            fontWeight: 'bold',
            color: '#2c3e50',
            marginBottom: '6px'
        },
        title: {
            fontSize: '18px',
            color: '#7f8c8d'
        },
        stats: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '18px',
            justifyContent: 'center',
            marginTop: '28px',
            marginBottom: '22px'
        },
        statCard: {
            flex: '1 1 120px',
            backgroundColor: '#f1f5f9',
            borderRadius: '10px',
            padding: '18px 12px',
            textAlign: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
        },
        statNumber: {
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#276f82',
            marginBottom: '4px'
        },
        statLabel: {
            fontSize: '14px',
            color: '#7f8c8d'
        },
        sectionTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#2c3e50',
            margin: '28px 0 14px'
        },
        infoRow: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 0',
            borderBottom: '1px solid #ecf0f1'
        },
        infoLabel: {
            color: '#7f8c8d',
            fontWeight: '600',
            fontSize: '16px'
        },
        infoValue: {
            color: '#2c3e50',
            fontSize: '16px'
        },
        skillsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
        },
        skillTag: {
            background: '#276f82',
            color: '#fff',
            borderRadius: '16px',
            padding: '7px 16px',
            fontSize: '14px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.07)'
        },
        activityItem: {
            background: '#f9fafb',
            borderLeft: '4px solid #276f82',
            padding: '14px',
            borderRadius: '9px',
            marginBottom: '14px'
        },
        activityTitle: {
            fontWeight: '500',
            color: '#2c3e50',
            fontSize: '15px'
        },
        activityTime: {
            fontSize: '13px',
            color: '#7f8c8d'
        },
        activityDesc: {
            marginTop: '6px',
            color: '#4b5563',
            fontSize: '14px'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <div style={styles.header}>
                    <div style={styles.avatar}>
                        {profileData.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div style={styles.name}>{profileData.name}</div>
                    <div style={styles.title}>{profileData.title}</div>
                </div>

                {/* Stats */}
                <div style={styles.stats}>
                    {stats.map((stat, i) => (
                        <div key={i} style={styles.statCard}>
                            <div style={styles.statNumber}>{stat.number}</div>
                            <div style={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Personal Info */}
                <div style={styles.sectionTitle}>Personal Information</div>
                <div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Email</span><span style={styles.infoValue}>{profileData.email}</span></div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Phone</span><span style={styles.infoValue}>{profileData.phone}</span></div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Department</span><span style={styles.infoValue}>{profileData.department}</span></div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Employee ID</span><span style={styles.infoValue}>{profileData.employeeId}</span></div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Join Date</span><span style={styles.infoValue}>{profileData.joinDate}</span></div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Location</span><span style={styles.infoValue}>{profileData.location}</span></div>
                    <div style={styles.infoRow}><span style={styles.infoLabel}>Access Level</span><span style={styles.infoValue}>{profileData.accessLevel}</span></div>
                </div>

                {/* Skills */}
                <div style={styles.sectionTitle}>Skills & Expertise</div>
                <div style={styles.skillsContainer}>
                    {skills.map((skill, i) => (
                        <div key={i} style={styles.skillTag}>{skill}</div>
                    ))}
                </div>

                {/* Activity */}
                <div style={styles.sectionTitle}>Recent Activity</div>
                <div>
                    {activities.map((activity, i) => (
                        <div key={i} style={styles.activityItem}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={styles.activityTitle}>{activity.title}</div>
                                <div style={styles.activityTime}>{activity.time}</div>
                            </div>
                            <div style={styles.activityDesc}>{activity.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
