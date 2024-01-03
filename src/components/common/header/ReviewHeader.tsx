import { useNavigate } from 'react-router-dom';
import { ReactComponent as LeftIcon } from '@assets/images/Left.svg';

export default function ReviewHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header className="flex h-6 h-[48px] w-full items-center pl-1">
      <div className="flex items-center">
        <LeftIcon className="cursor-pointer" onClick={goBack} />
      </div>
      <div className="flex-grow pr-5 text-center text-sm font-bold">
        리뷰 쓰기
      </div>
    </header>
  );
}
