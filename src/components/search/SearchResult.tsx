import { getToursSearch } from '@api/tours';
import { ResultCategory } from './ResultCategory';
import { useInfiniteQuery } from '@tanstack/react-query';
import ToursCategoryItem from '@components/Tours/ToursCategoryItem';
import { useEffect, useState } from 'react';
import { Spinner } from '@components/common/spinner/Spinner';
import ScrollTopButton from '@components/Plan/ScrollTopButton';

interface SearchResultProps {
  selectedRegion: string | null;
  searchWord: string;
}

export const SearchResult = ({
  selectedRegion,
  searchWord,
}: SearchResultProps) => {
  const categories = ['전체', '숙소', '식당', '관광지'];
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    console.log('searchWord: ' + searchWord);
  }, [searchWord]);
  console.log();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['searchResults', selectedRegion, searchWord, selectedCategory],
    queryFn: ({ pageParam = 0 }) =>
      getToursSearch({
        region: selectedRegion || '',
        searchWord: searchWord,
        category: selectedCategory !== '전체' ? selectedCategory : undefined,
        page: pageParam,
        size: 10,
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
      {selectedRegion && (
        <span className="title3 pt-3">{selectedRegion} 지역의 </span>
      )}
      {searchWord && <span className="title3 pt-3">{searchWord} 검색결과</span>}
      <div className="mt-2 flex">
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
        <ResultCategory
          data={searchResults}
          category={selectedCategory}
          fetchNextPage={hasNextPage ? fetchNextPage : null}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
      <ScrollTopButton />
      <div className="mb-5" />
    </>
  );
};
