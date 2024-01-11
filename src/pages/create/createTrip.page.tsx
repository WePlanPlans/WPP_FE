import BackHeader from '@components/common/header/BackHeader';
import { useState } from 'react';
import { SelectDate } from '../../components/createTrip/SelectDate';
import { CloseIcon } from '@components/common/icons/Icons';

export const CreateTrip = () => {
  const [inputValue, setInputValue] = useState('나의 여정');
  const [showSelectDate, setShowSelectDate] = useState(false);

  const clearInput = () => {
    setInputValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
    <div>
      <BackHeader />
      <div className="title1 mt-2 pb-5">여행 생성하기</div>
      <div className="relative mb-3 flex items-center">
        <input
          type="text"
          className="mb-2 h-[54px] w-full rounded-lg border border-zinc-300 p-4 text-black placeholder-gray4 focus:outline-none"
          placeholder="나의 여정 이름을 입력하세요"
          value={inputValue}
          onChange={handleChange}
          autoFocus
        />
        {inputValue && (
          <div
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray3"
            onClick={clearInput}>
            <CloseIcon />
          </div>
        )}
      </div>
      <input
        type="button"
        className="mb-2 h-[54px] w-full cursor-pointer rounded-lg border border-zinc-300 p-4  text-left text-black placeholder-gray4"
        value="여행 날짜(선택)"
        onClick={handleDateButtonClick}
      />
      <input
        type="button"
        className="mb-2 h-[54px] w-full cursor-pointer rounded-lg border border-zinc-300 p-4  text-left text-black placeholder-gray4"
        value="여행 인원(선택)"
        onClick={() => {}}
      />
    </div>
  );
};
