import { TourType, ToursListProps } from '@/@types/tours.types';
import ToursItem from './ToursItem';
import { getTours } from '@api/tours';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import React from 'react';

const ToursList = ({ selectedRegion }: ToursListProps) => {
  const { fetchNextPage, hasNextPage, data, error } = useInfiniteQuery({
    queryKey: ['tours', selectedRegion],
    queryFn: ({ pageParam = 0 }) => getTours(selectedRegion, pageParam, 10),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage?.data.data.pageable.pageNumber;
      const totalPages = lastPage?.data.data.totalPages;

      if (currentPage < totalPages - 1) {
        return currentPage + 1;
      }

      return undefined;
    },
  });

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }>
      <div className="no-scrollbar grid grid-cols-2 gap-[15px] overflow-y-scroll">
        {data?.pages.map((group, index) => (
          <React.Fragment key={index}>
            {group?.data.data.content.map((tour: TourType) => (
              <ToursItem key={tour.id} tour={tour} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ToursList;
