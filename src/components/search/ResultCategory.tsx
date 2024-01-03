import { ButtonWhite } from '@components/common/button/Button';
import { ResultItem } from './ResultItem';
import { TourType } from '@/@types/tours.types';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';

interface ResultCategoryProps {
  data: TourType[];
  category: string;
  fetchNextPage: (() => Promise<InfiniteQueryObserverResult<any, any>>) | null;
}

export const ResultCategory = ({
  data,
  category,
  fetchNextPage,
}: ResultCategoryProps) => {
  console.log(data);

  return (
    <>
      <h2 className="headline2 my-2.5">{category}</h2>
      {data.map((item) => (
        <ResultItem key={item.id} result={item} />
      ))}
      {fetchNextPage && (
        <ButtonWhite className="my-2" onClick={() => fetchNextPage()}>
          숙소 더 보기
        </ButtonWhite>
      )}
    </>
  );
};
