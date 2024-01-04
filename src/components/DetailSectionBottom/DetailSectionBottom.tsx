import { DetailReviews, DetailReviewStats } from '.';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getDetailTours } from '@api/tours';

export default function DetailSectionBottom() {
  const params = useParams();
  const tourItemId = Number(params.id);
  const { isError, data } = useQuery({
    queryKey: ['details', tourItemId],
    queryFn: () => getDetailTours(tourItemId),
  });
  if (data) {
    return (
      <>
        <DetailReviewStats />
        <DetailReviews reviewData={data} />
      </>
    );
  }

  if (isError) console.log('error');
}
