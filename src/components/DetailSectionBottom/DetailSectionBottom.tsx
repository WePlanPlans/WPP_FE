import { A, DetailReviews } from '.';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getDetailTours } from '@api/tours';

export default function DetailSectionBottom() {
  const params = useParams();
  const tourId = Number(params.id);
  const { isError, isLoading, isFetching, data } = useQuery({
    queryKey: ['details', tourId],
    queryFn: () => getDetailTours(tourId),
  });

  return (
    <>
      <A />
      <DetailReviews reviewData={data} />
    </>
  );
}
