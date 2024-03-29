import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import WishCategory from './WishCategory';
import WishList from './WishList';
import NoDataMessage from '@components/common/noData/NoDataMessage';
import { getMemberTours } from '@api/member';
import { HeartIcon } from '@components/common/icons/Icons';
import ScrollTopButton from '@components/common/scrollTopButton/ScrollTopButton';

const Wish = () => {
  const [selectedContentTypeId, setSelectedContentTypeId] = useState<
    null | number
  >(null);

  const { fetchNextPage, hasNextPage, data, isLoading, error } =
    useInfiniteQuery({
      queryKey: ['wishList'],
      queryFn: ({ pageParam = 0 }) => getMemberTours(pageParam, 10),
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

  const handleCategoryClick = (contentTypeId: number | null) => {
    setSelectedContentTypeId(contentTypeId);
  };

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <div className="mt-[5px] min-h-[100vh]">
      <div className="sticky top-0 z-[105] bg-white">
        <h1 className="py-[8px] text-[20px] font-bold text-gray7">
          나의 관심 목록
        </h1>
        <WishCategory onCategoryClick={handleCategoryClick} />
      </div>

      {data?.pages[0].data.content.length > 0 ? (
        <WishList
          toursData={data || { pages: [] }}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isLoading={isLoading}
          selectedContentTypeId={selectedContentTypeId}
        />
      ) : (
        <NoDataMessage
          message1="관심 여행지가 없어요."
          message2="가고 싶은 장소를 저장해보세요!"
          icon={<HeartIcon size={44} fill="#EDEDED" color="#EDEDED" />}
        />
      )}
      <ScrollTopButton />
      <div className="mb-5" />
    </div>
  );
};

export default Wish;
