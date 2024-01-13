import { ButtonPrimary } from '@components/common/button/Button';
import Calendar from '@components/DatePicker/Calendar';
import { BackIcon } from '@components/common/icons/Icons';

export const SelectDate = ({
  onClose,
  // onDatesSelected,
}: {
  onClose: () => void;
  // onDatesSelected: (startDate: Date | null, endDate: Date | null) => void;
}) => {
  const handleDateSelect = (startDate: Date | null, endDate: Date | null) => {
    // onDatesSelected(startDate, endDate);
  };

  return (
    <div className="flex h-[95vh] flex-col">
      <header className="mb-5 w-full bg-white">
        <BackIcon onClick={onClose} />
      </header>
      <Calendar onDateSelect={handleDateSelect} />
      <div className="mt-auto">
        <ButtonPrimary onClick={onClose}>완료</ButtonPrimary>
      </div>
    </div>
  );
};
