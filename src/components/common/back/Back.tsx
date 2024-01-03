import { useNavigate, useNavigation } from 'react-router-dom';
import { LeftIcon } from '../icons/Icons';

const Back = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-10 items-center" onClick={() => navigate(-1)}>
      <LeftIcon />
    </div>
  );
};

export default Back;
