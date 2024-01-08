import { useNavigate } from 'react-router-dom';
import { LeftIcon } from '../icons/Icons';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  isShowSkip?: boolean;
  isShowSave?: boolean;
}

const BackBox = ({ children, isShowSkip, isShowSave }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex h-10 items-center justify-between"
      onClick={() => navigate(-1)}>
      <LeftIcon />
      {children}
      {isShowSkip && <button className="body4 text-gray7">건너뛰기</button>}
      {isShowSave && <button className="headline2 text-main2">저장</button>}
    </div>
  );
};

export default BackBox;
