import { useNavigate } from 'react-router-dom';

export const StartSearchButton = () => {
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate('/search');
  };

  return (
    <button
      className="flex h-[40px] w-full items-center border-b-2 border-solid px-1"
      onClick={goToSearch}>
      <div className=" searchIcon mr-2.5 h-[12px] w-[12px]" />
      <span className="text-gray4 body1">어디로 떠나세요?</span>
    </button>
  );
};
