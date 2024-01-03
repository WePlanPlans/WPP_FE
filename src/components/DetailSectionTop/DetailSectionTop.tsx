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
  const tourId = Number(params.id);

  const detailQuery = useQuery({
    queryKey: ['details', tourId],
    queryFn: () => getDetailTours(tourId),
  });

  const reviewQuery = useQuery({
    queryKey: ['reviews', tourId],
    queryFn: () => getToursReviews(tourId),
  });

  if (detailQuery.error || reviewQuery.error) console.log('error - 예외 처리');

  return detailQuery.data && reviewQuery.data?.data.data ? (
    <div className="max-h-full">
      <DetailToursInfo infoData={detailQuery.data} />
      <DetailToursRating reviewData={reviewQuery.data.data.data} />
      <DetailToursMap mapData={detailQuery.data} />
      <DetailToursButtons />
    </div>
  ) : null;
}
