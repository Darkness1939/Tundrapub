import { ReviewForm } from "@features/auth/ReviewForm"
import './index.css'

export const ReviewPage = () => {
    return (
      <div className="review__container">
          <h1 className="">Reviews:</h1>
          <ReviewForm />
      </div>
    );
  };