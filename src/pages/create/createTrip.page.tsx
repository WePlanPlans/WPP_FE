import BackHeader from '@components/common/header/BackHeader';
import { useState } from 'react';
import { SelectDate } from '../../components/createTrip/SelectDate';

export const CreateTrip = () => {
  const [inputValue, setInputValue] = useState('나의 여정');
  const [showSelectDate, setShowSelectDate] = useState(false);

  const handleChange = (e) => {
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
      <div className="title1 pb-5">여행 생성하기</div>
      <input
        type="text"
        className="mb-2 h-[54px] w-full rounded-lg border border-zinc-300 p-4 text-black placeholder-gray4"
        placeholder="나의 여정 이름을 입력하세요"
        value={inputValue}
        onChange={handleChange}
      />
      <input
        type="button"
        className="h-[54px] w-full cursor-pointer rounded-lg border border-zinc-300 p-4  text-left text-black placeholder-gray4"
        value="여정 날짜"
        onClick={handleDateButtonClick}
      />
    </div>
  );
};
