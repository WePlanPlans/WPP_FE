import { getToursSearch } from '@api/tours';
import { useInfiniteQuery } from '@tanstack/react-query';
import ToursCategoryItem from '@components/Tours/ToursCategoryItem';
import { useState } from 'react';
import { Spinner } from '@components/common/spinner/Spinner';
import { ResultCategoryPlan } from './ResultCategoryPlan';

interface SearchResultProps {
  searchWord: string;
  apiType: 'postTripsLike' | 'postTripsItem';
}

export const SearchResultForPlan = ({
  searchWord,
  apiType,
}: SearchResultProps) => {
  const categories = ['전체', '숙소', '식당', '관광지'];
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['searchResults', searchWord, selectedCategory],
    queryFn: ({ pageParam = 0 }) =>
      getToursSearch({
        region: '',
        searchWord: searchWord,
        category: selectedCategory !== '전체' ? selectedCategory : undefined,
        page: pageParam,
        size: 20,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.data.data.last) {
        return allPages.length;
      }
      return undefined;
    },
    enabled: !!searchWord,
    retry: 2,
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    console.log('error fetching search result ');
  }

  const searchResults =
    data?.pages.flatMap((page) => page.data.data.content) || [];
  console.log('searchResults', searchResults);
  const noResults = searchResults && searchResults.length === 0;

  return (
    <>
      <div className="mb-[24px] mt-2 flex">
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
        <div className="my-10 text-center text-gray3">검색결과가 없습니다.</div>
      ) : (
        <ResultCategoryPlan
          data={searchResults}
          category={selectedCategory}
          fetchNextPage={hasNextPage ? fetchNextPage : null}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          apiType={apiType}
        />
      )}
    </>
  );
};
