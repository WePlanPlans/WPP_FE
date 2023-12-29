import { useNavigate } from 'react-router-dom';
import { ReactComponent as LeftIcon } from '../../../assets/images/Left.svg';

export default function DetailHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header className="flex h-6 h-[48px] w-full items-center pl-1">
      <LeftIcon className="cursor-pointer" onClick={goBack} />
    </header>
  );
}
