import Calendar from '@components/DatePicker/Calendar';
import { ButtonPrimary } from '@components/common/button/Button';
import { BackIcon } from '@components/common/icons/Icons';
import { tripDateState } from '@recoil/tripDate';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

export const SelectDate = ({ onClose }: { onClose: () => void }) => {
  const [, setTripDate] = useRecoilState(tripDateState);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const handleComplete = () => {
    const endDate = selectedEndDate ? selectedEndDate : selectedStartDate;
    setTripDate({ startDate: selectedStartDate, endDate });
    onClose();
  };

  return (
    <div className="flex h-[95vh] flex-col">
      <header className="relative mb-7 flex w-full items-center justify-center bg-white text-center">
        <div className="absolute left-0">
          <BackIcon onClick={onClose} />
        </div>
        <div className="headline2 ">날짜 선택</div>
      </header>
      <Calendar
        onDateSelect={(startDate, endDate) => {
          setSelectedStartDate(startDate);
          setSelectedEndDate(endDate);
        }}
      />
      <div className="mt-auto">
        <ButtonPrimary onClick={handleComplete}>완료</ButtonPrimary>
      </div>
    </div>
  );
};
