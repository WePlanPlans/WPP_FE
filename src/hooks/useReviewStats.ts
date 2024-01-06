import { useQuery } from '@tanstack/react-query';
import { getToursReviews } from '@api/tours';
import { TourKeywordInfo } from '@/@types/tours.types';
import { useParams } from 'react-router-dom';

type UseGetToursReviewsReturn = {
  reviewStats: TourKeywordInfo[] | null;
};

const sortTourKeywordInfos = (
  tourKeywordInfos: TourKeywordInfo[],
): TourKeywordInfo[] => {
  return tourKeywordInfos.sort((a, b) => b.keywordCount - a.keywordCount);
};

export const useGetToursReviews = (): UseGetToursReviewsReturn => {
  const params = useParams();
  const tourItemId = Number(params.id);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['toursReviews', tourItemId],
    queryFn: () => getToursReviews(tourItemId),
  });

  const reviewStats = data?.data.data.tourKeywordInfos
    ? sortTourKeywordInfos(data.data.data.tourKeywordInfos)
    : null;

  if (isLoading || isError) {
    return { reviewStats: null };
  }

  return { reviewStats };
};
