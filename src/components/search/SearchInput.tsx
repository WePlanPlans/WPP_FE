import { useNavigate } from 'react-router-dom';
import { ReactComponent as LeftIcon } from '@assets/images/Left.svg';
import { ReactComponent as SearchIcon } from '@assets/images/Search.svg';
import { ReactComponent as CloseIcon } from '@assets/images/DeleteInput.svg';
import { useEffect, useState } from 'react';

interface SearchInputProps {
  onInputChange: (value: string) => void;
  selectedRegion: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  onInputChange,
  selectedRegion,
}) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const clearInput = () => {
    setInputValue('');
    onInputChange('');
  };

  useEffect(() => {
    setInputValue(selectedRegion);
  }, [selectedRegion]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <>
      <div className="relative mb-3 flex items-center">
        <LeftIcon className="cursor-pointer" onClick={goBack} />
        <SearchIcon className="absolute left-[36px] top-1/2  -translate-y-1/2 transform" />
        <input
          className="body1 ml-2.5 h-[40px] w-full items-center rounded-lg bg-gray1 pl-[32px] pr-2.5 focus:outline-none"
          onClick={() => {}}
          placeholder="어디로 떠나세요?"
          value={inputValue}
          onChange={handleChange}
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
