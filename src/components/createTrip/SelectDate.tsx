import { ButtonPrimary } from '@components/common/button/Button';
import Calendar from '@components/DatePicker/Calendar';
import { BackIcon } from '@components/common/icons/Icons';

export const SelectDate = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex h-[95vh] flex-col">
      <header className="relative mb-5 flex w-full items-center justify-start gap-2.5 bg-white px-1">
        <BackIcon onClick={onClose} />
      </header>
      <Calendar />
      <div className="mt-auto">
        <ButtonPrimary onClick={onClose}>완료</ButtonPrimary>
      </div>
    </div>
  );
};
