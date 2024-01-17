import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Spinner } from '@components/common/spinner/Spinner';
import { getMemberTours } from '@api/member';
import { MyLikedList } from './MyLikedList';
import WishCategory from '@components/Wish/WishCategory';
import AddToListButton from './AddtoListBtn';

export const MyLiked = () => {
  const [selectedContentTypeId, setSelectedContentTypeId] = useState<
    null | number
  >(null);

  const handleCategoryClick = (contentTypeId: number | null) => {
    setSelectedContentTypeId(contentTypeId);
  };

  const { fetchNextPage, hasNextPage, data, isLoading, isError } =
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

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    console.log('error fetching search result ');
  }

  const searchResults = data?.pages.flatMap((page) => page.data.content) || [];
  const noResults = searchResults && searchResults.length === 0;

  return (
    <>
      <div className="title3 pt-3">나의 관심 목록 </div>
      <WishCategory onCategoryClick={handleCategoryClick} />
      {noResults ? (
        <div className="my-10 text-center text-gray3">
          나의 관심목록이 없습니다.
        </div>
      ) : (
        <MyLikedList
          toursData={data || { pages: [] }}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isLoading={isLoading}
          selectedContentTypeId={selectedContentTypeId}
        />
      )}
      <div className="sticky bottom-0 bg-white py-[20px]">
        <AddToListButton />
      </div>
    </>
  );
};
