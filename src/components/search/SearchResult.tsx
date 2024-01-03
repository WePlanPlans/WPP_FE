import { getToursSearch } from '@api/tours';
import { ResultCategory } from './ResultCategory';
import { useInfiniteQuery } from '@tanstack/react-query';
interface SearchResultProps {
  selectedRegion: string | null;
  searchValue: string;
}

export const SearchResult = ({
  selectedRegion,
  searchValue,
}: SearchResultProps) => {
  const fetchSearchResult = async () => {
    const options = {
      region: selectedRegion || '',
      searchWord: searchValue,
      category: '식당' || undefined,
      page: 1,
      size: 10,
    };

    try {
      const res = await getToursSearch(options);
      const data = res.data;
      const nextPage =
        data.pageable.pageNumber + 1 < data.totalPages
          ? data.pageable.pageNumber + 1
          : undefined;
      return {
        data: data.content,
        nextPage,
      };
    } catch (error) {
      throw new Error('Error fetching results');
    }
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['toursSearch', selectedRegion, searchValue],
    queryFn: fetchSearchResult,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    enabled: !!searchValue,
  });

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>error</div>;
  // const searchData = data?.pages.flatMap((page) => page.data);
  const searchData = data?.pages;

  console.log('data:', searchData);
  return (
    <>
      <div className="tabs">전체 숙소 식당 관광지</div>
      {selectedRegion && (
        <div className="title3 pt-3">{selectedRegion} 지역 내의 검색결과 </div>
      )}
      {searchData ? (
        searchData.map((item, index) => (
          <ResultCategory key={index} result={item} /> // ResultCategory에 각 검색 결과 항목을 전달
        ))
      ) : (
        <div>검색결과가 없습니다</div>
      )}
    </>
  );
};
