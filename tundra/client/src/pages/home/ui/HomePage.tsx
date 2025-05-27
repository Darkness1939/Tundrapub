import { ReviewsList } from '@pages/review/ReviewsList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../shared/store';

export const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div id='sys'>
      {user ? (
        <p>Привет, {user.name}!</p>
      ) : (
        <p>You are not logged in.</p>
      )}
      <ReviewsList />
    </div>
    
  );
};