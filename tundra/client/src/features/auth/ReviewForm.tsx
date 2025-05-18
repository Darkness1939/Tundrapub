import { useForm } from 'react-hook-form';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface ReviewFormValues {
  productName: string;
  review: string;
  rate: number;
  photo: string;
  user_id: number;
}

export const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormValues>();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ReviewFormValues) => {
    try {
      setLoading(true);
      const res = await fetch('/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || 'Review failed');
        return;
      }

      const resData = await res.json();
      alert(resData.message);
      navigate('/');
    } catch (err) {
      console.error('Review failed', err);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="CLASS__NAME">
      <div>
        <label id='un'>produc tName</label>
        <Input
          {...register('productName', { required: 'Username is required' })}
          className="CLASS__NAME"
        />
        {errors.productName && <p>{errors.productName.message}</p>}
      </div>

      <div>
        <label id='em'>review</label>
        <Input
          type="email"
          {...register('review', { required: true })}
          className="CLASS__NAME"
        />
        {errors.review && <p>{errors.review.message}</p>}
      </div>

      <div>
        <label id='pas'>rate</label>
        <Input
          type="text"
          {...register('rate')}
          className="CLASS__NAME"
        />
        {errors.rate && <p>{errors.rate.message}</p>}
      </div>

      <div>
        <label id='cp'>photo</label>
        <Input
          type="text"
          {...register('photo')}
          className="CLASS__NAME"
        />
        {errors.photo && <p>{errors.photo.message}</p>}
      </div>

      <div>
        <label id='pas'>Author</label>
        <Input
          type="text"
          {...register('user_id')}
          className="CLASS__NAME"
        />
        {errors.user_id && <p>{errors.user_id.message}</p>}
      </div>


      <Button type="submit" className="CLASS__NAME" disabled={loading}>
        {loading ? 'Submiting...' : 'Submit'}
      </Button>
    </form>
  );
};