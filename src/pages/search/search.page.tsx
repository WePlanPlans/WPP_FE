import { RegionSelect } from '@components/search/RegionSelect';
import SearchInput from '@components/search/SearchInput';
import { SearchResult } from '@components/search/SearchResult';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Search = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const regionFromQuery = queryParams.get('region');

  useEffect(() => {
    if (regionFromQuery) {
      setSelectedRegion(regionFromQuery);
    } else {
      setSelectedRegion('');
    }

    const searchWordFromQuery = queryParams.get('searchWord');
    if (searchWordFromQuery) {
      setSearchWord(searchWordFromQuery);
    }
  }, [location]);

  const [selectedRegion, setSelectedRegion] = useState(regionFromQuery);
  const [searchWord, setSearchWord] = useState('');

  return (
    <>
      <SearchInput />
      {searchWord ? (
        <SearchResult selectedRegion={selectedRegion} searchWord={searchWord} />
      ) : (
        <RegionSelect />
      )}
    </>
  );
};
