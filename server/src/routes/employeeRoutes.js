// import express from 'express';
// import {
//   createEmployee,
//   getEmployees,
//   getEmployeeById,
//   deleteEmployee
// } from '../controllers/employeeController.js';

// const router = express.Router();

// router.post('/', createEmployee);
// router.get('/', getEmployees);
// router.get('/:id', getEmployeeById);
// router.delete('/:id', deleteEmployee); 

// export default router;

import express from 'express';
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  deleteEmployee,
  updateEmployee
} from '../controllers/employeeController.js';

const router = express.Router();

router.post('/', createEmployee);
router.get('/', getEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);   // ✅ added PUT route
router.delete('/:id', deleteEmployee);

export default router;
