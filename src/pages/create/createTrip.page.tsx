import BackHeader from '@components/common/header/BackHeader';
import { useState } from 'react';
import { SelectDate } from '../../components/createTrip/SelectDate';
import {
  CalendarIcon,
  DocumentIcon,
  SearchIcon,
  UserIcon,
} from '@components/common/icons/Icons';
import { ButtonPrimary } from '@components/common/button/Button';
import { InputField } from '@components/createTrip/InputField';

export const CreateTrip = () => {
  const [title, setTitle] = useState('');
  const [numOfMembers, setNumOfMembers] = useState(2);
  const [showSelectDate, setShowSelectDate] = useState(false);

  const clearInput = () => {
    setTitle('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDateButtonClick = () => {
    setShowSelectDate(true);
  };

  const handleCloseSelectDate = () => {
    setShowSelectDate(false);
  };

  if (showSelectDate) {
    return <SelectDate onClose={handleCloseSelectDate} />;
  }
  return (
    <div className="flex h-[95vh] flex-col">
      <BackHeader />
      <div className="title1 mt-2 pb-5">여행 생성하기</div>

      <InputField
        icon={DocumentIcon}
        placeholder="나의 여정"
        value={title}
        onChange={handleChange}
        onClear={clearInput}
      />

      <InputField
        icon={UserIcon}
        type="number"
        placeholder="인원"
        value={numOfMembers}
        onChange={(newValue) => setNumOfMembers(newValue)}
        minValue={2}
        maxValue={100}
      />

      <InputField
        icon={CalendarIcon}
        placeholder="여행 날짜(선택)"
        onClick={handleDateButtonClick}
      />

      <div
        className="mb-3 flex h-[54px] w-full cursor-pointer items-center rounded-lg border border-solid border-zinc-300 px-[14px] py-3"
        onClick={() => {}}>
        <div className="mr-2 flex size-[24px] content-center justify-center">
          <SearchIcon size={17} />
        </div>
        <div className="flex-1 rounded-lg p-2 focus:outline-none">
          여행지 (선택)
        </div>
      </div>

      <div className="mt-auto">
        <ButtonPrimary onClick={() => {}}>완료</ButtonPrimary>
      </div>
    </div>
  );
};
