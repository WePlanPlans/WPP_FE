import { ButtonPrimary } from '@components/common/button/Button';
import Calendar from '@components/DatePicker/Calendar';
import BackHeader from '@components/common/header/BackHeader';

export const SelectDate = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex h-[95vh] flex-col">
      <BackHeader />
      <Calendar />
      <div className="mt-auto">
        <ButtonPrimary onClick={onClose}>완료</ButtonPrimary>
      </div>
    </div>
  );
};
