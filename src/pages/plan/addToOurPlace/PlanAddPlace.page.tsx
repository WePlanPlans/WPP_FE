import SearchInput from '@components/search/SearchInput';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchResultForPlan } from './SearchResult';
import { OurLiked } from '../AddToTripPlan/OurLiked';

export const PlanAddPlace = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchWordFromQuery = queryParams.get('searchWord');

  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    if (searchWordFromQuery) {
      setSearchWord(searchWordFromQuery);
    } else {
      setSearchWord('');
    }
  }, [location, searchWordFromQuery]);
  return (
    <div className="min-h-screen">
      <SearchInput />
      {searchWord ? (
        <SearchResultForPlan searchWord={searchWord} apiType="putTrips" />
      ) : (
        <OurLiked />
      )}
    </div>
  );
};
