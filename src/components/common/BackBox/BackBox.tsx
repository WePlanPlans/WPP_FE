import { LeftIcon, ShareIcon } from '../icons/Icons';
import { ReactNode } from 'react';

interface Props {
  showBack?: boolean;
  backHandler?: VoidFunction;
  children?: ReactNode;
  showSkip?: boolean;
  skipHandler?: VoidFunction;
  showSave?: boolean;
  isSaveValid?: boolean;
  saveHandler?: VoidFunction;
  showShare?: boolean;
  shareHandler?: VoidFunction;
}

const BackBox = ({
  showBack,
  backHandler,
  children,
  showSkip,
  skipHandler,
  showSave,
  isSaveValid,
  saveHandler,
  showShare,
  shareHandler,
}: Props) => {
  const onBackClick = () => {
    backHandler && backHandler();
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
          disabled={!isSaveValid}
          className="headline2 absolute right-0 text-main2 disabled:cursor-not-allowed disabled:text-gray3"
          onClick={onSaveClick}>
          저장
        </button>
      )}
      {showShare && (
        <button
          className="headline2 absolute right-0 text-main2"
          onClick={shareHandler}>
          <ShareIcon />
        </button>
      )}
    </div>
  );
};

export default BackBox;
