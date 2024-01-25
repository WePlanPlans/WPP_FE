import { getTours } from '@api/tours';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { v4 as uuidv4 } from 'uuid';
import ToursItem from './ToursItem';
import ToursItemSkeleton from './ToursItemSkeleton';
import { Spinner } from '@components/common/spinner/Spinner';

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
      threshold={500}
      loader={
        <div key={uuidv4()} className="flex justify-center">
          <Spinner />
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
