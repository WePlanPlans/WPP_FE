// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getDetailTours } from '@api/tours';

import {
  DetailToursInfo,
  DetailToursRating,
  DetailToursMap,
  DetailTourButtons,
} from '.';

export default function DetailSectionTop() {
  const params = useParams();
  const tourId = Number(params.id);

  const { isError, isLoading, isFetching, data } = useQuery({
    queryKey: ['details', tourId],
    queryFn: () => getDetailTours(tourId),
  });

  if (data) {
    return (
      <>
        <DetailToursInfo infoData={data} />
        <DetailToursRating />
        <DetailToursMap mapData={data} />
        <DetailTourButtons />
      </>
    );
  }

  if (isError) console.log('error');
}
