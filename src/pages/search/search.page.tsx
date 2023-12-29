import { RegionSelect } from '@components/search/RegionSelect';
import { SearchInput } from '@components/search/SearchInput';
import { SearchResult } from '@components/search/SearchResult';
import { useState } from 'react';

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (selectedRegion: string | number) => {
    console.log('선택한 지역:', selectedRegion);
    setSelectedRegion(selectedRegion.toString());
    setSearchValue(selectedRegion.toString());
  };

  const handleInputChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      <SearchInput
        onInputChange={handleInputChange}
        selectedRegion={selectedRegion}
      />
      {searchValue ? (
        <SearchResult />
      ) : (
        <RegionSelect onRegionChange={handleRegionChange} />
      )}
    </>
  );
};
