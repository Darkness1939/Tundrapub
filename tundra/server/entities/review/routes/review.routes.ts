import { Router } from 'express';
import { asyncHandler } from '../../../shared/lib/asyncHandler';
import { reviewService } from '../service/review.service';

const reviewRoutes = Router();

reviewRoutes.post('/', asyncHandler(reviewService.createReview));

reviewRoutes.get('/', (req, res) => {
    res.status(405).json({ message: 'Use POST method to create review' });
  });
    

export default reviewRoutes;