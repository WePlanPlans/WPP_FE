import { ButtonWhite } from '@components/common/button/Button';
import { ResultItem } from './ResultItem';
import { TourType } from '@/@types/tours.types';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';

interface ResultCategoryProps {
  data: TourType[];
  category: string;
  fetchNextPage: (() => Promise<InfiniteQueryObserverResult<any, any>>) | null;
  hasNextPage: boolean;
}

export const ResultCategory = ({
  data,
  category,
  fetchNextPage,
  hasNextPage,
}: ResultCategoryProps) => {
  // console.log('hasNextPage', hasNextPage);
  return (
    <>
      <h2 className="headline2 my-2.5">{category}</h2>
      {data.map((item) => (
        <ResultItem key={item.id} result={item} />
      ))}
      {hasNextPage ? (
        <ButtonWhite
          className="my-2"
          onClick={() => fetchNextPage && fetchNextPage()}>
          더보기
        </ButtonWhite>
      ) : (
        <div className="mt-3 text-center text-gray3">검색 결과의 끝입니다.</div>
      )}
    </>
  );
};
