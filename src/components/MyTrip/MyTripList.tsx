import React from 'react';
import { MyTripType } from '@/@types/trips.types';
import InfiniteScroll from 'react-infinite-scroller';
import { v4 as uuidv4 } from 'uuid';
import ToursItemSkeleton from '@components/Tours/ToursItemSkeleton';
import MyTripItem from './MyTripItem';

interface MyTripListProps {
  myTripsData: { pages: Array<{ data: { content: MyTripType[] } }> };
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading: boolean;
}

const MyTripList: React.FC<MyTripListProps> = ({
  myTripsData,
  fetchNextPage,
  hasNextPage,
  isLoading,
}) => {
  if (!myTripsData || myTripsData.pages.length === 0) {
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
            className="z-[100] mx-auto h-8 w-8 animate-spin rounded-full border-[3px] border-solid border-current border-t-transparent pt-10 text-[blue-600] dark:text-[#28d8ff]"
            role="status"
            aria-label="loading">
            <div className="sr-only">Loading...</div>
          </div>
        </div>
      }>
      <div className="no-scrollbar grid grid-cols-1 gap-[5px] overflow-y-scroll">
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => (
              <ToursItemSkeleton key={index} />
            ))
          : myTripsData.pages.map((group) => (
              <React.Fragment key={uuidv4()}>
                {group?.data.content.map((myTripList: MyTripType) => (
                  <MyTripItem key={uuidv4()} myTripList={myTripList} />
                ))}
              </React.Fragment>
            ))}
      </div>
    </InfiniteScroll>
  );
};

export default MyTripList;
