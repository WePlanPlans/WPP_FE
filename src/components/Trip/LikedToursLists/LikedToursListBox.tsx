import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { v4 as uuidv4 } from 'uuid';
import ToursItemSkeleton from '@components/Tours/ToursItemSkeleton';
// import { Spinner } from '@components/common/spinner/Spinner';

import LikedToursListItem from './LikedToursListItem';

interface LikedToursListProps {
  toursData: { pages: Array<{ data: { content: ourTripType[] } }> };
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isLoading: boolean;
  selectedContentTypeId: number | null;
  selectedTripId: number;
}

const LikedToursListBox: React.FC<LikedToursListProps> = ({
  toursData,
  fetchNextPage,
  hasNextPage,
  isLoading,
  selectedContentTypeId,
  selectedTripId,
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
          {/* <Spinner /> */}
        </div>
      }>
      <div className="no-scrollbar grid grid-cols-1 gap-[5px] overflow-y-scroll">
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => (
              <ToursItemSkeleton key={index} />
            ))
          : filteredData.map((group) => (
              <React.Fragment key={uuidv4()}>
                {group?.data.content.map((ourTripList: ourTripType) => (
                  <LikedToursListItem
                    key={uuidv4()}
                    ourTripList={ourTripList}
                    selectedTripId={selectedTripId}
                  />
                ))}
              </React.Fragment>
            ))}
      </div>
    </InfiniteScroll>
  );
};

export default LikedToursListBox;
