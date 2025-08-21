
// import express from 'express';
// import {
//   createEmployee,
//   getEmployees,
//   getEmployeeById,
//   deleteEmployee,
//   updateEmployee,
//   searchEmployees, // 👈 import search function
// } from '../controllers/employeeController.js';

// const router = express.Router();

// // ✅ Put this BEFORE /:id so it doesn't get mistaken as an ID
// router.get('/search', searchEmployees); 

// router.post('/', createEmployee);
// router.get('/', getEmployees);
// router.get('/:id', getEmployeeById);
// router.put('/:id', updateEmployee);
// router.delete('/:id', deleteEmployee);

// export default router;
import express from 'express';
import {
  getEmployees, getEmployeeById, searchEmployees,
  createEmployee, updateEmployee, deleteEmployee
} from '../controllers/employeeController.js';
import { requireAuth, allowRoles } from '../middleware/auth.js';

const router = express.Router();

// All employee endpoints require login
router.use(requireAuth);

// VIEW + SEARCH: admin, teamlead, employee
router.get('/',        allowRoles('ADMIN','TEAM_LEAD','EMPLOYEE'), getEmployees);
router.get('/search',  allowRoles('ADMIN','TEAM_LEAD','EMPLOYEE'), searchEmployees);
router.get('/:id',     allowRoles('ADMIN','TEAM_LEAD','EMPLOYEE'), getEmployeeById);

// CREATE/UPDATE/DELETE: admin only
router.post('/',       allowRoles('ADMIN'), createEmployee);
router.put('/:id',     allowRoles('ADMIN'), updateEmployee);
router.delete('/:id',  allowRoles('ADMIN'), deleteEmployee);

export default router;
