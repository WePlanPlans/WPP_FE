import { ButtonPrimary } from '@components/common/button/Button';
import { BackIcon } from '@components/common/icons/Icons';

export const SelectDestination = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex h-[95vh] flex-col">
      <header className="mb-5 w-full bg-white">
        <BackIcon onClick={onClose} />
      </header>
      <div className="title1">검색</div>
      <div className="mt-auto">
        <ButtonPrimary onClick={onClose}>완료</ButtonPrimary>
      </div>
    </div>
  );
};
