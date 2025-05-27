import { Router } from 'express';
import multer from 'multer';
import { asyncHandler } from '../../../shared/lib/asyncHandler';
import { reviewController } from '../controller/review.controller';

const reviewRoutes = Router();
const upload = multer({ dest: 'uploads/' });

reviewRoutes.post('/', upload.single('photo'), asyncHandler(reviewController.createReview));
reviewRoutes.get('/', asyncHandler(reviewController.getAllReviews));

export default reviewRoutes;