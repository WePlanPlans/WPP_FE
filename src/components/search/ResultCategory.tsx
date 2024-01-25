import { ButtonWhite } from '@components/common/button/Button';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { ResultItem } from './ResultItem';

interface ResultCategoryProps {
  data: TourType[];
  category: string;
  fetchNextPage: (() => Promise<InfiniteQueryObserverResult<any, any>>) | null;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

export const ResultCategory = ({
  data,
  category,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: ResultCategoryProps) => {
  // console.log('hasNextPage', hasNextPage);
  return (
    <>
      <h2 className="headline2 my-2.5">{category}</h2>
      {data.map((item) => (
        <ResultItem key={item.id} result={item} />
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
    </>
  );
};
