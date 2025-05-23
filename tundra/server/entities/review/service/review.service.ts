import { Review } from "../model/Review";
import { User } from "../../user/models/User";

interface ReviewData {
  id: number;
  user_id: number;
  product_name: string;
  review: string;
  rate: number;
  photo: string;
}

export const reviewService = {
  async createReview({ id, user_id, product_name, review, rate, photo}: ReviewData) {
    const user = await User.findByPk(user_id);
    if (!user) {
      throw new Error ('User not found');
    }

    const newReview = await Review.create({
      id,
      user_id,
      product_name,
      review,
      rate,
      photo,
    })
    
    const ReviewData = newReview.toJSON();

    return {
      id: ReviewData.id,
      user_id: ReviewData.user_id,
      product_name: ReviewData.product_name,
      review: ReviewData.review,
      rate: ReviewData.rate,
      photo: ReviewData.photo,
    };
  }
};