import { getToursReviews } from '@api/tours';
import { useEffect } from 'react';

export default function DetailReview() {
  const tourItemId = 1;
  useEffect(() => {
    getToursReviews(tourItemId);
  }, []);
  return <div className="mt-2 text-lg font-bold">리뷰</div>;
}
