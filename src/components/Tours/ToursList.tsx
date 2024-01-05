import { TourType, ToursListProps } from '@/@types/tours.types';
import { getTours } from '@api/tours';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { v4 as uuidv4 } from 'uuid';
import ToursItem from './ToursItem';
import ToursItemSkeleton from './ToursItemSkeleton';

const ToursList = ({ selectedRegion }: ToursListProps) => {
  const { fetchNextPage, hasNextPage, data, isLoading, error } =
    useInfiniteQuery({
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

  const [showSkeleton, setShowSkeleton] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShowSkeleton(true);
    } else {
      const timer = setTimeout(() => setShowSkeleton(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={
        <div key={uuidv4()} className="flex justify-center">
          <div
            className="z-[105] mx-auto mt-10 h-8 w-8 animate-spin rounded-full border-[3px] border-solid border-current border-t-transparent text-[blue-600] dark:text-[#28d8ff]"
            role="status"
            aria-label="loading">
            <div className="sr-only">Loading...</div>
          </div>
        </div>
      }>
      <div className="no-scrollbar grid min-h-[500px] grid-cols-2 gap-[15px] overflow-y-scroll">
        {showSkeleton
          ? Array.from({ length: 10 }, (_, index) => (
              <ToursItemSkeleton key={index} />
            ))
          : data?.pages.map((group) => (
              <React.Fragment key={uuidv4()}>
                {group?.data.data.content.map((tour: TourType) => (
                  <ToursItem key={uuidv4()} tour={tour} />
                ))}
              </React.Fragment>
            ))}
      </div>
    </InfiniteScroll>
  );
};

export default ToursList;
