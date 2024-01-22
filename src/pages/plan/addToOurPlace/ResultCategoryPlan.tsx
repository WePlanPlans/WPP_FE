import { ButtonWhite } from '@components/common/button/Button';
import { TourType } from '@/@types/tours.types';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { ResultItemPlan } from './ResultItem';
import AddToListButton from './AddtoListBtn';

interface ResultCategoryProps {
  data: TourType[];
  category: string;
  fetchNextPage: (() => Promise<InfiniteQueryObserverResult<any, any>>) | null;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  apiType: 'postTripsLike' | 'postTripsItem';
}

export const ResultCategoryPlan = ({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  apiType,
}: ResultCategoryProps) => {
  return (
    <>
      {data.map((item) => (
        <ResultItemPlan key={item.id} result={item} />
      ))}
      {hasNextPage && !isFetchingNextPage ? (
        <ButtonWhite
          className="my-2"
          onClick={() => fetchNextPage && fetchNextPage()}>
          더보기
        </ButtonWhite>
      ) : isFetchingNextPage ? (
        <ButtonWhite className="my-2" disabled>
          Loading...
        </ButtonWhite>
      ) : (
        <div className="mt-3 text-center text-gray3"></div>
      )}
      <div className="sticky bottom-0 bg-white py-[20px]">
        <AddToListButton apiType={apiType} />
      </div>
    </>
  );
};
