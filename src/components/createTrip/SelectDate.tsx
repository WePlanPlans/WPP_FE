import { DatePicker } from '@components/DatePicker/DatePicker';
import { DatePickerInfinite } from '@components/DatePicker/DatePickerInfinite';

export const SelectDate = ({ onClose }) => {
  return (
    <div>
      {/* <DatePicker /> */}
      <DatePickerInfinite />
      <button onClick={onClose}>완료</button>
    </div>
  );
};
