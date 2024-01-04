// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getDetailTours, getToursReviews } from '@api/tours';

import {
  DetailToursInfo,
  DetailToursRating,
  DetailToursMap,
  DetailToursButtons,
} from '.';

export default function DetailSectionTop() {
  const params = useParams();
  const tourItemId = Number(params.id);

  const detailQuery = useQuery({
    queryKey: ['details', tourItemId],
    queryFn: () => getDetailTours(tourItemId),
  });

  const reviewQuery = useQuery({
    queryKey: ['reviews', tourItemId],
    queryFn: () => getToursReviews(tourItemId),
  });

  if (detailQuery.error || reviewQuery.error) console.log('error - 예외 처리');

  return detailQuery.data && reviewQuery.data?.data.data ? (
    <div className="max-h-full">
      <DetailToursInfo infoData={detailQuery.data} />
      <DetailToursRating reviewData={reviewQuery.data.data.data} />
      <DetailToursMap mapData={detailQuery.data} />
      <DetailToursButtons reviewData={detailQuery.data} />
    </div>
  ) : null;
}
