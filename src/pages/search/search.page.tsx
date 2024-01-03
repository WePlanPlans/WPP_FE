import { RegionSelect } from '@components/search/RegionSelect';
import { SearchInput } from '@components/search/SearchInput';
import { SearchResult } from '@components/search/SearchResult';
import useDebounce from '@hooks/useDebounce';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Search = () => {
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

  const [searchValue, setSearchValue] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(regionFromQuery);

  const handleRegionChange = (selectedRegion: string) => {
    console.log('선택한 지역:', selectedRegion);
    setSelectedRegion(selectedRegion);
    // setSearchValue(selectedRegion);
    navigate(`?region=${encodeURIComponent(selectedRegion)}`);
    console.log('selected region:', selectedRegion);
  };

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };

  const debouncedSearchValue = useDebounce(searchValue, 300);
  useEffect(() => {
    console.log('search value:', debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <>
      <SearchInput
        onInputChange={handleInputChange}
        selectedRegion={selectedRegion}
      />
      {selectedRegion || debouncedSearchValue ? (
        <SearchResult
          selectedRegion={selectedRegion}
          searchValue={debouncedSearchValue}
        />
      ) : (
        <RegionSelect onRegionChange={handleRegionChange} />
      )}
    </>
  );
};
