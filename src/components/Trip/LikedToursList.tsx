import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';

import LikedToursListCategory from './LikedToursLists/LikedToursListCategory';
import LikedToursListBox from './LikedToursLists/LikedToursListBox';
import NoDataMessage from '@components/common/noData/NoDataMessage';

import { getTripsLike } from '@api/trips';
import { HeartIcon, NewIcon } from '@components/common/icons/Icons';

export const LikedToursList = () => {
  const [selectedContentTypeId, setSelectedContentTypeId] = useState<
    null | number
  >(null);

  const navigate = useNavigate();
  const { id: tripId } = useParams();

  if (!tripId) {
    return;
  }

  const { fetchNextPage, hasNextPage, data, isLoading, error } =
    useInfiniteQuery({
      queryKey: ['ourTrips'],
      queryFn: ({ pageParam = 0 }) => getTripsLike(tripId, pageParam, 10),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (
          lastPage &&
          lastPage.data &&
          lastPage.data &&
          lastPage.data.pageable
        ) {
          const currentPage = lastPage.data.pageable.pageNumber;
          const totalPages = lastPage.data.totalPages;

          if (currentPage < totalPages - 1) {
            return currentPage + 1;
          }
        }
        return undefined;
      },
    });

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const handleCategoryClick = (contentTypeId: number | null) => {
    setSelectedContentTypeId(contentTypeId);
  };

  return (
    <div className="realtive pt-5">
      <LikedToursListCategory onCategoryClick={handleCategoryClick} />

      {data?.pages[0].data.content.length > 0 ? (
        <div className="mb-[15px]">
          <LikedToursListBox
            toursData={data || { pages: [] }}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isLoading={isLoading}
            selectedTripId={tripId}
            selectedContentTypeId={selectedContentTypeId}
          />
        </div>
      ) : (
        <div className="relative min-h-[60vh]">
          <NoDataMessage
            message1="우리의 관심 목록이 없습니다."
            message2="가고 싶은 장소를 추가해보세요!"
            icon={<HeartIcon size={44} fill="#EDEDED" color="#EDEDED" />}
          />
        </div>
      )}

      {/* 우리의 관심 여행지 추가 버튼 => 검색 라우터 이동 */}
      <div className="sticky bottom-5 left-1/2 z-[100] inline-flex h-10 w-[168px] -translate-x-1/2 transform items-center justify-center gap-1.5 rounded-3xl border border-solid border-cyan-400 bg-white px-3.5">
        <button
          onClick={() => navigate('add')}
          className="flex items-center justify-between">
          <NewIcon />
          <span className="ml-[5px] mt-[0.5px] text-sm font-semibold text-cyan-400">
            우리의 관심목록 추가
          </span>
        </button>
      </div>
    </div>
  );
};
