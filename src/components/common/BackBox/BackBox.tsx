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

  const onSkipClick = () => {
    console.log('스킵 버튼 클릭');
  };
  const onSaveClick = () => {
    console.log('저장 버튼 클릭');
  };

  return (
    <div
      className="flex h-10 items-center justify-between"
      onClick={() => navigate(-1)}>
      <LeftIcon />
      {children}
      {isShowSkip && (
        <button className="body4 text-gray7" onClick={onSkipClick}>
          건너뛰기
        </button>
      )}
      {isShowSave && (
        <button className="headline2 text-main2" onClick={onSaveClick}>
          저장
        </button>
      )}
    </div>
  );
};

export default BackBox;
