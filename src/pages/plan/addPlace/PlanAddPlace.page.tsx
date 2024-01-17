import SearchInput from '@components/search/SearchInput';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchResultForPlan } from './SearchResult';
import { OurLikedList } from '../OurLikedList';

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
    <>
      <SearchInput />
      {searchWord ? (
        <SearchResultForPlan searchWord={searchWord} />
      ) : (
        <OurLikedList />
      )}
    </>
  );
};
