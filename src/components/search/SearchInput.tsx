import { ReactComponent as CloseIcon } from '@assets/images/DeleteInput.svg';
import { ReactComponent as LeftIcon } from '@assets/images/Left.svg';
import { ReactComponent as SearchIcon } from '@assets/images/Search.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const clearInput = () => {
    setInputValue('');
  };

  // useEffect(() => {
  //   setInputValue(selectedRegion);
  // }, [selectedRegion]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 엔터 누르면 검색키워드 쿼리스트링으로 추가
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set('searchWord', inputValue);
      navigate(`?${queryParams.toString()}`);
    }
  };

  return (
    <>
      <div className="relative mb-3 flex items-center">
        <LeftIcon className="cursor-pointer" onClick={goBack} />
        <SearchIcon className="absolute left-[36px] top-1/2  -translate-y-1/2 transform" />
        <input
          className="body1 ml-2.5 h-[40px] w-full items-center rounded-lg bg-gray1 pl-[32px] pr-2.5 focus:outline-none"
          placeholder="어디로 떠나세요?"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {inputValue && (
          <CloseIcon
            className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
            onClick={clearInput}
          />
        )}
      </div>
    </>
  );
};
export default React.memo(SearchInput);
