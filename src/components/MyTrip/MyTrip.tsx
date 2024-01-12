import { useInfiniteQuery } from '@tanstack/react-query';
import { getMemberTrips } from '@api/member';
import NoDataMessage from '@components/common/noData/NoDataMessage';
import MyTripList from './MyTripList';
import { PenIcon } from '@components/common/icons/Icons';

const MyTrip = () => {
  const { fetchNextPage, hasNextPage, data, isLoading, error } =
    useInfiniteQuery({
      queryKey: ['wishList'],
      queryFn: ({ pageParam = 0 }) => getMemberTrips(pageParam, 10),
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

  return (
    <div className="mt-3 min-h-[100vh]">
      <div className=" mb-6 bg-white py-0.5">
        <h1 className="title2 pt-3">나의 여정</h1>
      </div>
      {data?.pages[0].data.content.length > 0 ? (
        <MyTripList
          myTripsData={data || { pages: [] }}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isLoading={isLoading}
        />
      ) : (
        <NoDataMessage
          message1="저장된 관심 여행지가 없습니다."
          message2="가고 싶은 장소를 저장해보세요!"
          icon={<PenIcon size={44} fill="#EDEDED" color="#EDEDED" />}
        />
      )}
    </div>
  );
};

export default MyTrip;
