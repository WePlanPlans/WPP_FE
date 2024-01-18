import { useInfiniteQuery } from '@tanstack/react-query';
import ToursCategoryItem from '@components/Tours/ToursCategoryItem';
import { useEffect, useState } from 'react';
import { Spinner } from '@components/common/spinner/Spinner';
import { getMemberTours } from '@api/member';

export const OurLikedList = () => {
  const categories = ['전체', '숙소', '식당', '관광지'];

  // const [selectedContentTypeId, setSelectedContentTypeId] = useState<
  //   null | number
  // >(null);

  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  // useEffect(() => {
  //   console.log('searchWord: ' + searchWord);
  // }, [searchWord]);
  // console.log();

  const {
    // fetchNextPage, hasNextPage,
    data,
    isLoading,
    isError,
  } = useInfiniteQuery({
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

  // const handleCategoryClick = (contentTypeId: number | null) => {
  //   setSelectedContentTypeId(contentTypeId);
  // };

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    console.log('error fetching search result ');
  }

  // console.log(data?.pages[0].data.content);
  const searchResults = data?.pages.flatMap((page) => page.data.content) || [];
  console.log('searchResults', searchResults);
  const noResults = searchResults && searchResults.length === 0;

  return (
    <>
      <div className="title3 pt-3">우리의 관심 목록 </div>
      <div className="mt-3 flex">
        {categories.map((category) => (
          <ToursCategoryItem
            key={category}
            name={category}
            isSelected={category === selectedCategory}
            onSelect={handleSelectCategory}
          />
        ))}
      </div>
      {noResults ? (
        <div className="my-10 text-center text-gray3">
          나의 관심목록이 없습니다.
        </div>
      ) : (
        <div></div>
        // <WishList
        //   toursData={data || { pages: [] }}
        //   fetchNextPage={fetchNextPage}
        //   hasNextPage={hasNextPage}
        //   isLoading={isLoading}
        //   selectedContentTypeId={selectedContentTypeId}
        // />
      )}
    </>
  );
};
