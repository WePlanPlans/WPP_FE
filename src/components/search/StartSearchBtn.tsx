import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@components/common/icons/Icons';

export const StartSearchButton = () => {
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate('/search');
  };

  return (
    <button
      className="flex h-[40px] w-full items-center border-b-2 border-solid border-black px-1"
      onClick={goToSearch}>
      <SearchIcon size={16} />
      <span className="body1 ml-[8px] text-gray4">어디로 떠나세요?</span>
    </button>
  );
};
