import { useNavigate } from 'react-router-dom';
import { ReactComponent as LeftIcon } from '@assets/images/Left.svg';
import { ReactComponent as SearchIcon } from '@assets/images/Search.svg';

export const SearchInput = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="relative flex items-center ">
        <LeftIcon className="cursor-pointer" onClick={goBack} />
        <SearchIcon className="absolute left-[36px] top-1/2  -translate-y-1/2 transform" />
        <input
          className="body1 ml-2.5 h-[40px] w-full items-center rounded-lg bg-gray1 pl-[32px] pr-2.5 focus:outline-none"
          onClick={() => {}}
          placeholder="어디로 떠나세요?"></input>
      </div>
    </>
  );
};
