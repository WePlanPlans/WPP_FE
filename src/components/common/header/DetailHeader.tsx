import { useNavigate } from 'react-router-dom';
import { LeftIcon } from '../icons/Icons';

export default function DetailHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header className="flex h-6 h-[48px] w-[20px] w-full items-center pl-1">
      <LeftIcon className="cursor-pointer" onClick={goBack} />
    </header>
  );
}
