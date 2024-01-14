import { ButtonPrimary } from '@components/common/button/Button';
import BackHeader from '@components/common/header/BackHeader';
import {
  CalendarIcon,
  CloseIcon,
  SearchIcon,
  UserIcon,
} from '@components/common/icons/Icons';
import { InputField } from '@components/createTrip/InputField';
import { SelectDestination } from '@components/createTrip/SelectDestination';
import { tripDateState } from '@recoil/tripDate';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { SelectDate } from '../../components/createTrip/SelectDate';
import { postTrips } from '@api/trips';
import useCounter from '@hooks/useCounter';
import { formatDate } from '@utils/formatDate';

export const CreateTrip = () => {
  const [title, setTitle] = useState('');
  const [numOfMembers, increaseNumOfMembers, decreaseNumOfMembers] = useCounter(
    2,
    2,
    12,
  ); // (기본값, 최솟값, 최댓값)
  const [showSelectDate, setShowSelectDate] = useState(false);
  const [showSelectDestination, setShowSelectDestination] = useState(false);

  const handleSubmit = async () => {
    try {
      const tripRequestData = {
        tripName: title || '나의 N번째 여정', // title이 빈 문자열일 경우 기본값 설정
        numberOfPeople: numOfMembers,
        startDate: tripDate.startDate
          ? tripDate.startDate.toISOString().split('T')[0]
          : null,
        endDate: tripDate.endDate
          ? tripDate.endDate.toISOString().split('T')[0]
          : null,
        area: null,
        subarea: null,
      };

      const response = await postTrips(tripRequestData);
      console.log('전송 완료: ', response);
    } catch (error) {
      console.error('전송 실패: ', error);
    }
  };

  const tripDate = useRecoilValue(tripDateState);
  const formattedTripDate =
    tripDate.startDate && tripDate.endDate
      ? `${formatDate(tripDate.startDate, 'MM.dd')} - ${formatDate(
          tripDate.endDate,
          'MM.dd',
        )}`
      : '여행 날짜(선택)';

  if (showSelectDate) {
    return (
      <SelectDate
        onClose={() => {
          setShowSelectDate(false);
        }}
      />
    );
  }
  if (showSelectDestination) {
    return (
      <SelectDestination
        onClose={() => {
          setShowSelectDestination(false);
        }}
      />
    );
  }
  return (
    <div className="flex h-[95vh] flex-col">
      <BackHeader />
      <div className="title1 mt-2 pb-5">여행 생성하기</div>

      <InputField icon={CalendarIcon}>
        <input
          type="text"
          className="flex-1 p-2 focus:outline-none"
          placeholder="나의 여정"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
        />
        {title && (
          <div
            className="ml-auto cursor-pointer rounded-full bg-gray3"
            onClick={() => {
              setTitle('');
            }}>
            <CloseIcon />
          </div>
        )}
      </InputField>

      <InputField icon={UserIcon}>
        <div className="flex-1 p-2">{numOfMembers}명</div>
        <div className="ml-auto flex">
          <button
            className="ml-2 flex size-[24px] items-center justify-center rounded-full bg-gray3 text-white"
            onClick={decreaseNumOfMembers}>
            -
          </button>
          <button
            className="ml-2 flex size-[24px] items-center justify-center rounded-full bg-gray3 text-white"
            onClick={increaseNumOfMembers}>
            +
          </button>
        </div>
      </InputField>

      <InputField
        icon={CalendarIcon}
        onClick={() => {
          setShowSelectDate(true);
        }}
        isClickable>
        <div className="p-2">{formattedTripDate}</div>
      </InputField>

      <InputField
        icon={SearchIcon}
        onClick={() => {
          setShowSelectDestination(true);
        }}
        isClickable>
        <div className="p-2">여행지 (선택)</div>
      </InputField>

      <div className="mt-auto">
        <ButtonPrimary onClick={handleSubmit}>완료</ButtonPrimary>
      </div>
    </div>
  );
};
