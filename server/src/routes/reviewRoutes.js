

// import express from 'express';
// import {
//   getPerformanceReviews,
//   addPerformanceReview,
//   updatePerformanceReview,
//   deletePerformanceReview,
//   bulkDeleteReviews,
//   exportReviews,
//   getPerformanceAnalytics,
//   getEmployeesForReviews
// } from '../controllers/reviewController.js';

// const router = express.Router();

// // GET /api/reviews - Get all performance reviews with filtering, search, and pagination
// router.get('/', getPerformanceReviews);

// // GET /api/reviews/analytics - Get performance analytics
// router.get('/analytics', getPerformanceAnalytics);

// // GET /api/reviews/employees - Get employees list for dropdown
// router.get('/employees', getEmployeesForReviews);

// // POST /api/reviews - Add a new performance review
// router.post('/', addPerformanceReview);

// // PUT /api/reviews/:id - Update a specific performance review
// router.put('/:id', updatePerformanceReview);

// // DELETE /api/reviews/:id - Delete a specific performance review
// router.delete('/:id', deletePerformanceReview);

// // POST /api/reviews/bulk-delete - Bulk delete performance reviews
// router.post('/bulk-delete', bulkDeleteReviews);

// // POST /api/reviews/export - Export reviews to CSV or JSON
// router.post('/export', exportReviews);

// // GET /api/reviews/:id - Get a specific performance review (optional, for detailed view)
// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
    
//     const review = await prisma.performanceReview.findUnique({
//       where: { id: parseInt(id) },
//       include: {
//         employee: {
//           include: {
//             department: true
//           }
//         }
//       }
//     });

//     if (!review) {
//       return res.status(404).json({ error: 'Performance review not found' });
//     }

//     res.json(review);
//   } catch (err) {
//     console.error('Error fetching performance review:', err);
//     res.status(500).json({ 
//       error: 'Failed to fetch review', 
//       details: err.message 
//     });
//   }
// });

// export default router;

import express from 'express';
import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  bulkDeleteReviews,
  getAnalytics,
  getReviewsByEmployee,
  exportReviews
} from '../controllers/reviewController.js';

const router = express.Router();

// Authentication middleware (optional - uncomment if you have auth)
// const authenticateToken = (req, res, next) => {
//   // Add your authentication logic here
//   next();
// };

// GET /api/reviews - Get all reviews with filtering, sorting, and pagination
router.get('/', getAllReviews);

// GET /api/reviews/analytics - Get performance analytics
router.get('/analytics', getAnalytics);

// GET /api/reviews/export - Export reviews to CSV
router.get('/export', exportReviews);

// GET /api/reviews/employee/:employeeId - Get reviews by employee ID
router.get('/employee/:employeeId', getReviewsByEmployee);

// GET /api/reviews/:id - Get single review by ID
router.get('/:id', getReviewById);

// POST /api/reviews - Create new review
router.post('/', createReview);

// PUT /api/reviews/:id - Update review
router.put('/:id', updateReview);

// DELETE /api/reviews/:id - Delete single review
router.delete('/:id', deleteReview);

// POST /api/reviews/bulk-delete - Bulk delete reviews
router.post('/bulk-delete', bulkDeleteReviews);

export default router;