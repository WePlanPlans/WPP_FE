import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMemberTours } from '@api/member';
import WishCategory from './WishCategory';
import WishList from './WishList';

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
    <div className="mt-3">
      <div className="sticky top-0 z-[105] bg-white py-0.5">
        <h1 className="title2 pt-3">나의 관심 여행지</h1>
        <WishCategory onCategoryClick={handleCategoryClick} />
      </div>

      <WishList
        toursData={data || { pages: [] }}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        selectedContentTypeId={selectedContentTypeId}
      />
    </div>
  );
};

export default Wish;
