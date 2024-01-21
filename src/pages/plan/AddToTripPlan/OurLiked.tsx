import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Spinner } from '@components/common/spinner/Spinner';
import { getTripsLike } from '@api/trips';
import WishCategory from '@components/Wish/WishCategory';
import AddToListButton from '../addToOurPlace/AddtoListBtn';
import { OurLikedList } from './OurLikedList';
import { useParams } from 'react-router-dom';

export const OurLiked = () => {
  const { id: tripId } = useParams();
  const [selectedContentTypeId, setSelectedContentTypeId] = useState<
    null | number
  >(null);

  const handleCategoryClick = (contentTypeId: number | null) => {
    setSelectedContentTypeId(contentTypeId);
  };

  const { fetchNextPage, hasNextPage, data, isLoading, error } =
    useInfiniteQuery({
      queryKey: ['ourTrips'],
      queryFn: ({ pageParam = 0 }) => getTripsLike(tripId || '', pageParam, 10),
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
  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const results = data?.pages.flatMap((page) => page.data.content) || [];
  const noResults = results && results.length === 0;

  return (
    <div className="flex min-h-[90vh] flex-col">
      <div className="title3 pt-3">우리의 관심 목록 </div>
      <WishCategory onCategoryClick={handleCategoryClick} />
      {noResults ? (
        <div className="my-10 text-center text-gray3">
          우리의 관심목록이 없습니다.
        </div>
      ) : (
        <OurLikedList
          toursData={data || { pages: [] }}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isLoading={isLoading}
          selectedContentTypeId={selectedContentTypeId}
        />
      )}
      <div className="sticky bottom-0 mt-auto bg-white py-[20px] ">
        <AddToListButton apiType="postTripsItem" />
      </div>
    </div>
  );
};
