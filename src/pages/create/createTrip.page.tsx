import { ButtonPrimary } from '@components/common/button/Button';
import BackHeader from '@components/common/header/BackHeader';
import {
  CalendarIcon3,
  CloseIcon,
  CounterIcon,
  PlanIcon,
  UserIcon,
} from '@components/common/icons/Icons';
import { InputField } from '@components/createTrip/InputField';
import { tripDateState } from '@recoil/tripDate';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { SelectDate } from '../../components/createTrip/SelectDate';
import { postTrips } from '@api/trips';
import useCounter from '@hooks/useCounter';
import { formatDate } from '@utils/formatDate';
import { useQuery } from '@tanstack/react-query';
import { getMemberTrips } from '@api/member';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@components/common/spinner/Spinner';

export const CreateTrip = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [numOfMembers, increaseNumOfMembers, decreaseNumOfMembers] = useCounter(
    1,
    1,
  );
  const [showSelectDate, setShowSelectDate] = useState(false);
  const tripDate = useRecoilValue(tripDateState);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['myTrips'],
    queryFn: () => getMemberTrips(),
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }
  const MY_TRIP_NUMBER = data?.length + 1;
  const defaultTitle = `나의 여정 ${MY_TRIP_NUMBER}`;

  const handleSubmit = async () => {
    try {
      const tripRequestData = {
        tripName: title || defaultTitle,
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
      const tripId = response.data.data.tripId;
      navigate('/trip/' + tripId);
    } catch (error) {
      console.error('전송 실패: ', error);
    }
  };

  const formattedTripDate =
    tripDate.startDate && tripDate.endDate
      ? tripDate.startDate === tripDate.endDate
        ? formatDate(tripDate.startDate, 'yyyy. MM. dd')
        : `${formatDate(tripDate.startDate, 'yyyy. MM. dd')} - ${formatDate(
            tripDate.endDate,
            'MM. dd',
          )}`
      : '여행 날짜 (선택)';

  if (showSelectDate) {
    return (
      <SelectDate
        onClose={() => {
          setShowSelectDate(false);
        }}
      />
    );
  }
  return (
    <div className="flex h-dvh flex-col">
      <BackHeader />
      <div className="title1 mt-2 pb-5">여행 생성하기</div>

      <InputField icon={PlanIcon}>
        <input
          type="text"
          className="min-w-0 flex-1 p-2 focus:outline-none"
          size={0}
          placeholder={defaultTitle}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
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
        <div className="flex-1 p-2">인원</div>
        <div className="ml-auto flex items-center justify-center">
          {numOfMembers !== 1 && (
            <button
              className="flex size-[24px] items-center justify-center rounded-full text-gray3"
              onClick={decreaseNumOfMembers}>
              <CounterIcon minus />
            </button>
          )}
          <div className="flex-1 px-4">{numOfMembers}</div>
          <button
            className="flex size-[24px] items-center justify-center rounded-full text-white"
            onClick={increaseNumOfMembers}>
            <CounterIcon plus />
          </button>
        </div>
      </InputField>

      <InputField
        icon={CalendarIcon3}
        onClick={() => {
          setShowSelectDate(true);
        }}
        isClickable>
        <div className="p-2">{formattedTripDate}</div>
      </InputField>

      <div className="mt-auto py-[24px]">
        <ButtonPrimary onClick={handleSubmit}>완료</ButtonPrimary>
      </div>
    </div>
  );
};
