import { DetailReviews } from '.';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getDetailTours } from '@api/tours';
import { useEffect } from 'react';

export default function DetailSectionBottom() {
  const params = useParams();
  const tourItemId = Number(params.id);
  const { isError, isLoading, isFetching, data } = useQuery({
    queryKey: ['details', tourItemId],
    queryFn: () => getDetailTours(tourItemId),
  });
  if (data) {
    return (
      <>
        <DetailReviews reviewData={data} />
      </>
    );
  }

  if (isError) console.log('error');
}
