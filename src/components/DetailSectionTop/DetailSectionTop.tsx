// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getDetailTours, getToursReviews } from '@api/tours';

import {
  DetailToursInfo,
  DetailToursRating,
  DetailToursMap,
  DetailTourButtons,
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
    <div className="max-h-[500px]">
      <DetailToursInfo infoData={detailQuery.data} />
      <DetailToursRating reviewData={reviewQuery.data.data.data} />
      <DetailToursMap mapData={detailQuery.data} />
      <DetailTourButtons />
    </div>
  ) : null;
}
