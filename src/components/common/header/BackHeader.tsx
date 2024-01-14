import { useNavigate } from 'react-router-dom';
import { BackIcon } from '../icons/Icons';

export default function BackHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header className="relative mb-5 flex w-full items-center justify-start gap-2.5 bg-white px-1">
      <BackIcon onClick={goBack} />
    </header>
  );
}
