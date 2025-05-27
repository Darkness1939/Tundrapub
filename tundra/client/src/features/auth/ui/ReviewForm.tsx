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
      <div className='col'>
        <label id='un'>Name</label>
        <Input
          placeholder='Product name'
          {...register('productName', { required: 'Username is required' })}
          className="nra"
        />
        {errors.productName && <p>{errors.productName.message}</p>}
      </div>

      <div className='col'>
        <label id='em'>Review</label>
        <Input
        placeholder='Describe product'
          type='text'
          {...register('review', { required: true })}
          className="nra"
        />
        {errors.review && <p>{errors.review.message}</p>}
      </div>

      <div className='col'>
        <label id='pas'>Rate</label>
        <Input
          type='range'
          id='culor'
          min='1'
          max='5'
          list='markers'
          {...register('rate')}
          className="nra"
        />
        <datalist id="markers">
  <option value="1" label='1'></option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
        </datalist>
        {errors.rate && <p>{errors.rate.message}</p>}
      </div>

      <div className='col'>
        <label id='cp'>Image</label>
        <Input
          type='file'  
          {...register('photo')}
          className="nrad"
        />
        {errors.photo && <p>{errors.photo.message}</p>}
      </div>

      <Button type="submit" id='revbut' className="CLASS__NAME" disabled={loading}>
        {loading ? 'Submiting...' : 'Submit'}
      </Button>
    </form>
  );
};