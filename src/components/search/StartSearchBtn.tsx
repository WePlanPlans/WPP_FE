import { useNavigate } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '@assets/images/Search.svg';

export const StartSearchButton = () => {
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate('/search');
  };

  return (
    <button
      className="flex h-[40px] w-full items-center border-b-2 border-solid px-1"
      onClick={goToSearch}>
      <SearchIcon className="  mr-2.5" />
      <span className="body1 text-gray3">어디로 떠나세요?</span>
    </button>
  );
};
