
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

