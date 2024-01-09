import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { v4 as uuidv4 } from 'uuid';
import WishItem from './WishItem';
import ToursItemSkeleton from '@components/Tours/ToursItemSkeleton';
import { TourType } from '@/@types/tours.types';

interface WishListProps {
  toursData: { pages: Array<{ data: { content: TourType[] } }> };
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading: boolean;
  selectedContentTypeId: number | null;
}

const WishList: React.FC<WishListProps> = ({
  toursData,
  fetchNextPage,
  hasNextPage,
  isLoading,
  selectedContentTypeId,
}) => {
  if (!toursData || toursData.pages.length === 0) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const filteredData =
    selectedContentTypeId !== null
      ? toursData.pages.map((group) => ({
          data: {
            content: group.data.content.filter(
              (item) => item.contentTypeId === selectedContentTypeId,
            ),
          },
        }))
      : toursData.pages;

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
          : filteredData.map((group, pageIndex) => (
              <React.Fragment key={uuidv4()}>
                {group?.data.content.map(
                  (wishList: TourType, index: number, array: TourType[]) => (
                    <WishItem
                      key={uuidv4()}
                      wishList={wishList}
                      isLastItem={
                        pageIndex === filteredData.length - 1 &&
                        index === array.length - 1
                      }
                    />
                  ),
                )}
              </React.Fragment>
            ))}
      </div>
    </InfiniteScroll>
  );
};

export default WishList;
