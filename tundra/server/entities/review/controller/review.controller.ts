import { Request, Response } from 'express';
import { reviewService } from '../service/review.service';

export const reviewController = {
  createReview: async (req: Request, res: Response) => {
    const { id, user_id, product_name, review, rate, photo } = req.body;

    try {
      const newReview = await reviewService.createReview({
        id, user_id, product_name, review, rate, photo });

        res.status(201).json({
          id: newReview.id,
          message: 'Review created successfully!',
        });
    } catch (error: any) {
      res.status(500).json({
        message: error.message || 'Review creation failed',
      });
    }
  }  
};