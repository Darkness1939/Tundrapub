import { Request, Response } from 'express';
import { reviewService } from '../service/review.service';
import { Review } from '../model/Review';

export const reviewController = {
  createReview: async (req: Request, res: Response) => {
    try {
      const photo = req.file?.filename || 'no-image.jpg';
      const reviewData = {
        ...req.body,
        photo,
      };

      const newReview = await reviewService.createReview(reviewData);

        res.status(201).json({
          id: newReview.id,
          message: 'Review created successfully!',
        });
    } catch (error: any) {
      res.status(500).json({
        message: error.message || 'Review creation failed',
      });
    }
  },
  getAllReviews: async (req: Request, res: Response) => {
    try {
      const reviews = await Review.findAll({ order: [['id', 'DESC']] });
      res.json(reviews);
    } catch (error: any) {
      res.status(500).json({ message: error.message || 'Failed to fetch reviews' });
    }
  }
};