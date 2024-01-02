import { RegionSelect } from '@components/search/RegionSelect';
import { SearchInput } from '@components/search/SearchInput';
import { SearchResult } from '@components/search/SearchResult';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getToursSearch } from '@api/tours';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Tour {
  id: number;
  title: string;
  ratingAverage: number;
  reviewCount: number;
  likedCount: number;
  liked: boolean;
  smallThumbnailUrl: string;
}

interface ToursResponse {
  totalElements: number;
  totalPages: number;
  size: number;
  content: Tour[];
}

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const regionFromQuery = queryParams.get('region');
  useEffect(() => {
    if (regionFromQuery) {
      setSelectedRegion(regionFromQuery);
    } else {
      setSelectedRegion('');
    }
  }, [location]);

  const handleRegionChange = (selectedRegion: string) => {
    console.log('선택한 지역:', selectedRegion);
    setSelectedRegion(selectedRegion);
    setSearchValue(selectedRegion);
    navigate(`?region=${encodeURIComponent(selectedRegion)}`);
    console.log('selected region:', searchValue);
  };

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };

  // const {
  //   data,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   isError,
  //   isLoading,
  // } = useInfiniteQuery({
  //   queryKey: ['toursSearch', selectedRegion, searchValue],
  //   queryFn: ({ pageParam = 0 }) =>
  //     getToursSearch(selectedRegion, searchValue, pageParam, 10, '').then(
  //       (response) => response.data.data.content,
  //     ),
  //   initialPageParam: 0,
  //   getNextPageParam: (lastPage, allPages) => {
  //     const nextPage = allPages.length;
  //     return nextPage < lastPage.totalPages ? nextPage : undefined;
  //   },
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error occurred</div>;

  // console.log(data);

  return (
    <>
      <SearchInput
        onInputChange={handleInputChange}
        selectedRegion={selectedRegion}
      />
      {selectedRegion || searchValue ? (
        <SearchResult selectedRegion={selectedRegion} />
      ) : (
        <RegionSelect onRegionChange={handleRegionChange} />
      )}
    </>
  );
};
