import { useNavigate } from 'react-router-dom';
import { LeftIcon } from '../icons/Icons';
import { ReactNode } from 'react';

interface Props {
  showBack?: boolean;
  // backHandler?: VoidFunction;
  children?: ReactNode;
  showSkip?: boolean;
  skipHandler?: VoidFunction;
  showSave?: boolean;
  saveHandler?: VoidFunction;
}

const BackBox = ({
  showBack,
  // backHandler,
  children,
  showSkip,
  skipHandler,
  showSave,
  saveHandler,
}: Props) => {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(-1);
  };
  const onSkipClick = () => {
    skipHandler && skipHandler();
  };
  const onSaveClick = () => {
    saveHandler && saveHandler();
  };

  return (
    <div className="relative flex h-10 items-center justify-center">
      {showBack && (
        <button className="absolute left-0" onClick={onBackClick}>
          <LeftIcon />
        </button>
      )}
      <h1 className="headline2 text-black">{children}</h1>
      {showSkip && (
        <button
          className="body4 absolute right-0 text-gray7"
          onClick={onSkipClick}>
          건너뛰기
        </button>
      )}
      {showSave && (
        <button
          className="headline2 absolute right-0 text-main2"
          onClick={onSaveClick}>
          저장
        </button>
      )}
    </div>
  );
};

export default BackBox;
