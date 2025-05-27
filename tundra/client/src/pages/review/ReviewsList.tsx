import { useEffect, useState } from 'react';
import './ReviewList.css';

interface Review {
  id: number;
  product_name: string;
  review: string;
  rate: number;
  photo: string;
  user_id: number;
}

export const ReviewsList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error('Failed to load reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p className="review-list__loading">Loading...</p>;
  if (!reviews.length) return <p className="review-list__empty">No reviews yet.</p>;

  return (
    <div className="review-list">
      <h2 className="review-list__title">All Reviews</h2>
      <div className="review-list__grid">
        {reviews.map((r) => (
          <div key={r.id} className="review-card">
            <h3 className="review-card__product">{r.product_name}</h3>
            <p className="review-card__user">User ID: {r.user_id}</p>
            <p className="review-card__rate">Rating: {r.rate} / 5</p>
            <p className="review-card__text">{r.review}</p>
            {r.photo && (
              <img
                src={`/uploads/${r.photo}`}
                alt={r.product_name}
                className="review-card__image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
