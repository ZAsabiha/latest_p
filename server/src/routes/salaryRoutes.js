// import express from 'express';
// import {
//   getAllSalaries,
//   getSalaryById,
//   createSalary,
//   updateSalary,
//   deleteSalary,
//   getSalariesByDepartment,
//   getSalariesByEmployee,
//   getSalaryStatistics,
//   getEmployeesForDropdown,
//   getDepartmentsForDropdown
// } from '../controllers/salaryController.js';

// const router = express.Router();

// router.get('/salaries/department/:departmentId', getSalariesByDepartment);
// router.get('/salaries/employee/:employeeId', getSalariesByEmployee);
// router.get('/statistics/salaries', getSalaryStatistics);
// router.get('/dropdown/employees', getEmployeesForDropdown);
// router.get('/dropdown/departments', getDepartmentsForDropdown);

// // General routes with parameters come after
// router.get('/', getAllSalaries);
// router.get('/:id', getSalaryById);
// router.post('/', createSalary);
// router.put('/:id', updateSalary);
// router.delete('/:id', deleteSalary);

// export default router;
// routes/salaryRoutes.js
import express from 'express';
import {
  getDepartmentsDropdown,
  getEmployeesByDepartment,
  updateSalary
} from '../controllers/salaryController.js';

const router = express.Router();

router.get('/dropdown/departments', getDepartmentsDropdown);
router.get('/dropdown/employees', getEmployeesByDepartment);
router.put('/', updateSalary);

export default router;
