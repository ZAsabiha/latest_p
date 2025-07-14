// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// export const getAllSalaries = async (req, res) => {
//   try {
//     const salaries = await prisma.salary.findMany({
//       include: {
//         employee: {
//           select: {
//             id: true,
//             name: true,
//             email: true,
//             department: { select: { name: true } }
//           }
//         }
//       },
//       orderBy: { createdAt: 'desc' }
//     });

//     res.status(200).json({
//       success: true,
//       data: salaries,
//       message: 'Salaries retrieved successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error retrieving salaries',
//       error: error.message
//     });
//   }
// };

// export const getSalaryById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const salary = await prisma.salary.findUnique({
//       where: { id: parseInt(id) },
//       include: {
//         employee: {
//           select: {
//             id: true, name: true, email: true,
//             department: { select: { name: true } }
//           }
//         }
//       }
//     });
//     if (!salary) {
//       return res.status(404).json({
//         success: false,
//         message: 'Salary record not found'
//       });
//     }
//     res.status(200).json({
//       success: true,
//       data: salary,
//       message: 'Salary retrieved successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error retrieving salary',
//       error: error.message
//     });
//   }
// };

// export const createSalary = async (req, res) => {
//   try {
//     const { employee, baseSalary, allowances, deductions, payDate, overtimeHours } = req.body;
//     if (!employee || !baseSalary || !payDate) {
//       return res.status(400).json({
//         success: false,
//         message: 'Employee, base salary, and pay date are required'
//       });
//     }
//     const employeeExists = await prisma.employee.findUnique({
//       where: { id: parseInt(employee) }
//     });
//     if (!employeeExists) {
//       return res.status(400).json({
//         success: false,
//         message: 'Employee not found'
//       });
//     }
//     const existingSalary = await prisma.salary.findFirst({
//       where: {
//         employeeId: parseInt(employee),
//         payDate: new Date(payDate)
//       }
//     });
//     if (existingSalary) {
//       return res.status(400).json({
//         success: false,
//         message: 'Salary record already exists for this employee and pay date'
//       });
//     }
//     const newSalary = await prisma.salary.create({
//       data: {
//         employeeId: parseInt(employee),
//         baseSalary: parseFloat(baseSalary),
//         allowances: parseFloat(allowances || 0),
//         deductions: parseFloat(deductions || 0),
//         payDate: new Date(payDate),
//         overtimeHours: parseInt(overtimeHours || 0)
//       },
//       include: {
//         employee: {
//           select: {
//             id: true, name: true, email: true,
//             department: { select: { name: true } }
//           }
//         }
//       }
//     });
//     res.status(201).json({
//       success: true,
//       data: newSalary,
//       message: 'Salary created successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error creating salary',
//       error: error.message
//     });
//   }
// };

// export const updateSalary = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { employee, baseSalary, allowances, deductions, payDate, overtimeHours } = req.body;
//     const salary = await prisma.salary.findUnique({
//       where: { id: parseInt(id) }
//     });
//     if (!salary) {
//       return res.status(404).json({
//         success: false,
//         message: 'Salary record not found'
//       });
//     }
//     if (employee) {
//       const employeeExists = await prisma.employee.findUnique({
//         where: { id: parseInt(employee) }
//       });
//       if (!employeeExists) {
//         return res.status(400).json({
//           success: false,
//           message: 'Employee not found'
//         });
//       }
//     }
//     const updatedSalary = await prisma.salary.update({
//       where: { id: parseInt(id) },
//       data: {
//         ...(employee && { employeeId: parseInt(employee) }),
//         ...(baseSalary && { baseSalary: parseFloat(baseSalary) }),
//         ...(allowances !== undefined && { allowances: parseFloat(allowances) }),
//         ...(deductions !== undefined && { deductions: parseFloat(deductions) }),
//         ...(payDate && { payDate: new Date(payDate) }),
//         ...(overtimeHours !== undefined && { overtimeHours: parseInt(overtimeHours) })
//       },
//       include: {
//         employee: {
//           select: {
//             id: true, name: true, email: true,
//             department: { select: { name: true } }
//           }
//         }
//       }
//     });
//     res.status(200).json({
//       success: true,
//       data: updatedSalary,
//       message: 'Salary updated successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error updating salary',
//       error: error.message
//     });
//   }
// };

// export const deleteSalary = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const salary = await prisma.salary.findUnique({
//       where: { id: parseInt(id) }
//     });
//     if (!salary) {
//       return res.status(404).json({
//         success: false,
//         message: 'Salary record not found'
//       });
//     }
//     await prisma.salary.delete({
//       where: { id: parseInt(id) }
//     });
//     res.status(200).json({
//       success: true,
//       message: 'Salary deleted successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error deleting salary',
//       error: error.message
//     });
//   }
// };

// export const getSalariesByDepartment = async (req, res) => {
//   try {
//     const { departmentId } = req.params;
//     const salaries = await prisma.salary.findMany({
//       where: {
//         employee: { departmentId: parseInt(departmentId) }
//       },
//       include: {
//         employee: {
//           select: {
//             id: true, name: true, email: true,
//             department: { select: { name: true } }
//           }
//         }
//       },
//       orderBy: { createdAt: 'desc' }
//     });
//     res.status(200).json({
//       success: true,
//       data: salaries,
//       message: 'Salaries for department retrieved successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error retrieving salaries by department',
//       error: error.message
//     });
//   }
// };

// export const getSalariesByEmployee = async (req, res) => {
//   try {
//     const { employeeId } = req.params;
//     const salaries = await prisma.salary.findMany({
//       where: { employeeId: parseInt(employeeId) },
//       include: {
//         employee: {
//           select: {
//             id: true, name: true, email: true,
//             department: { select: { name: true } }
//           }
//         }
//       },
//       orderBy: { createdAt: 'desc' }
//     });
//     res.status(200).json({
//       success: true,
//       data: salaries,
//       message: 'Employee salaries retrieved successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error retrieving employee salaries',
//       error: error.message
//     });
//   }
// };

// export const getSalaryStatistics = async (req, res) => {
//   try {
//     const totalSalaries = await prisma.salary.count();
//     const salaries = await prisma.salary.findMany({
//       select: { baseSalary: true, allowances: true, deductions: true }
//     });
//     const totalNetSalary = salaries.reduce((sum, salary) => {
//       return sum + (salary.baseSalary + salary.allowances - salary.deductions);
//     }, 0);
//     const departmentStats = await prisma.department.findMany({
//       select: {
//         id: true, name: true,
//         employees: {
//           select: {
//             salaries: {
//               select: {
//                 baseSalary: true, allowances: true, deductions: true
//               }
//             }
//           }
//         }
//       }
//     });
//     const departmentSalaryStats = departmentStats.map(dept => {
//       const allSalaries = dept.employees.flatMap(emp => emp.salaries);
//       const totalSalary = allSalaries.reduce((sum, salary) => {
//         return sum + (salary.baseSalary + salary.allowances - salary.deductions);
//       }, 0);
//       const avgSalary = allSalaries.length > 0 ? totalSalary / allSalaries.length : 0;
//       return {
//         departmentId: dept.id,
//         departmentName: dept.name,
//         count: allSalaries.length,
//         totalSalary,
//         avgSalary
//       };
//     });
//     res.status(200).json({
//       success: true,
//       data: {
//         totalSalaries,
//         totalNetSalary,
//         departmentStats: departmentSalaryStats
//       },
//       message: 'Salary statistics retrieved successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error retrieving salary statistics',
//       error: error.message
//     });
//   }
// };

// export const getEmployeesForDropdown = async (req, res) => {
//   try {
//     const { departmentId } = req.query;
//     const whereClause = departmentId ? { departmentId: parseInt(departmentId) } : {};
//     const employees = await prisma.employee.findMany({
//       where: whereClause,
//       select: {
//         id: true, name: true, email: true,
//         department: { select: { name: true } }
//       },
//       orderBy: { name: 'asc' }
//     });
//     res.status(200).json({
//       success: true,
//       data: employees,
//       message: 'Employees retrieved successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error retrieving employees',
//       error: error.message
//     });
//   }
// };

// export const getDepartmentsForDropdown = async (req, res) => {
//   try {
//     const departments = await prisma.department.findMany({
//       select: { id: true, name: true },
//       orderBy: { name: 'asc' }
//     });
//     res.status(200).json({
//       success: true,
//       data: departments,
//       message: 'Departments retrieved successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error retrieving departments',
//       error: error.message
//     });
//   }
// };
// controllers/salaryController.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getDepartmentsDropdown = async (req, res) => {
  try {
    const departments = await prisma.department.findMany({
      select: { id: true, name: true }
    });
    res.json({ success: true, data: departments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to load departments' });
  }
};

export const getEmployeesByDepartment = async (req, res) => {
  const { departmentId } = req.query;
  if (!departmentId) {
    return res.status(400).json({ success: false, message: 'Department ID is required' });
  }

  try {
    const employees = await prisma.employee.findMany({
      where: { departmentId: Number(departmentId) },
      select: {
        id: true,
        name: true,
        department: { select: { name: true } }
      }
    });

    res.json({ success: true, data: employees });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to load employees' });
  }
};

export const createSalary = async (req, res) => {
 const { employee, baseSalary, allowances, deductions, payDate, overtimeHours } = req.body;


  if (!employee || !baseSalary || !payDate) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    const salary = await prisma.salary.create({
      data: {
        employeeId: Number(employee),
        baseSalary: Number(baseSalary),
        allowances: Number(allowances || 0),
        deductions: Number(deductions || 0),
        payDate: new Date(payDate),
         overtimeHours: Number(overtimeHours || 0),
      }
    });

    res.json({ success: true, data: salary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to create salary record' });
  }
};
