// import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getDetailTours, getToursReviews } from '@api/tours';

import {
  DetailToursButtons,
  DetailToursInfo,
  DetailToursMap,
  DetailToursRating,
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

  if (detailQuery.data && reviewQuery.data?.data.data) {
    sessionStorage.setItem('contentTypeId', detailQuery.data.contentTypeId);
    return (
      <div className="mb-[20px] max-h-full">
        <DetailToursInfo infoData={detailQuery.data} />
        <DetailToursRating reviewData={reviewQuery.data.data.data} />
        <DetailToursMap mapData={detailQuery.data} />
        <DetailToursButtons reviewData={detailQuery.data} />
      </div>
    );
  }
}
