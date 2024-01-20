import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Spinner } from '@components/common/spinner/Spinner';
import { getTripsLike } from '@api/trips';
import { getTripIdFromUrl } from '@utils/getTripIdFromUrl';

import { MyLikedList } from './addPlace/MyLikedList';
import WishCategory from '@components/Wish/WishCategory';
import AddToListButton from './addPlace/AddtoListBtn';

export const OurLikedList = () => {
  const [selectedContentTypeId, setSelectedContentTypeId] = useState<
    null | number
  >(null);

  const handleCategoryClick = (contentTypeId: number | null) => {
    setSelectedContentTypeId(contentTypeId);
  };

  const tripId = getTripIdFromUrl();

  const { fetchNextPage, hasNextPage, data, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ['TripsLike'],
      queryFn: ({ pageParam = 0 }) =>
        getTripsLike({
          tripId: tripId,
          category: undefined,
          page: pageParam,
        }),
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

  console.log('data', data);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    console.log('error fetching search result ');
  }

  const results = data?.pages.flatMap((page) => page.data.content) || [];
  const noResults = results && results.length === 0;

  return (
    <div className="flex min-h-[90vh] flex-col">
      <div className="title3 pt-3">우리의 관심 목록 </div>
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
      <div className="sticky bottom-0 mt-auto bg-white py-[20px] ">
        <AddToListButton apiType="putTrips" />
      </div>
    </div>
  );
};
