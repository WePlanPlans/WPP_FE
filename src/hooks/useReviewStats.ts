import { useQuery } from '@tanstack/react-query';
import { getToursReviews } from '@api/tours';
import { TourKeywordInfo } from '@/@types/tours.types';
// useGetToursReviews 훅의 반환 타입 정의
type UseGetToursReviewsReturn = {
  reviewStats: TourKeywordInfo[] | null;
};

export const useGetToursReviews = (): UseGetToursReviewsReturn => {
  const { data } = useQuery({
    queryKey: ['toursReviews'],
    queryFn: () => getToursReviews(99),
    staleTime: 60000,
  });
  const sortTourKeywordInfos = (
    tourKeywordInfos: TourKeywordInfo[],
  ): TourKeywordInfo[] => {
    return tourKeywordInfos.sort((a, b) => b.keywordCount - a.keywordCount);
  };
  const reviewStats = data?.data.data.tourKeywordInfos
    ? sortTourKeywordInfos(data.data.data.tourKeywordInfos)
    : null;

  return { reviewStats };
};
