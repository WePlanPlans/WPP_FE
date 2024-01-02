import { useQuery } from '@tanstack/react-query';
import { getToursReviews } from '@api/tours';
import { TourKeywordInfo } from '@/@types/tours.types';

type UseGetToursReviewsReturn = {
  reviewStats: TourKeywordInfo[] | null;
};

const sortTourKeywordInfos = (
  tourKeywordInfos: TourKeywordInfo[],
): TourKeywordInfo[] => {
  return tourKeywordInfos.sort((a, b) => b.keywordCount - a.keywordCount);
};

export const useGetToursReviews = (): UseGetToursReviewsReturn => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['toursReviews'],
    queryFn: () => getToursReviews(99),
    staleTime: 60000,
  });

  const reviewStats = data?.data.data.tourKeywordInfos
    ? sortTourKeywordInfos(data.data.data.tourKeywordInfos)
    : null;

  if (isLoading || isError) {
    return { reviewStats: null };
  }

  return { reviewStats };
};
