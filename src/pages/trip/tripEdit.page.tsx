import { putTrips } from '@api/trips';
import { BackBox } from '@components/common';
import { ButtonPrimary } from '@components/common/button/Button';
import {
  CalendarIcon,
  CloseIcon,
  CounterIcon,
  PlanIcon,
  UserIcon,
} from '@components/common/icons/Icons';
import { InputField } from '@components/createTrip/InputField';
import useCounter from '@hooks/useCounter';
import { useGetTrips } from '@hooks/useGetTrips';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';
import { tripDateState } from '@recoil/tripDate';
import { formatDate } from '@utils/formatDate';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { SelectDate } from '../../components/createTrip/SelectDate';

const TripEdit = () => {
  const navigate = useNavigate();
  const tripId = useGetTripsAuthority().tripId;
  const { tripName, numberOfPeople, startDate, endDate } = useGetTrips();

  const [title, setTitle] = useState('');
  const [numOfMembers, increaseNumOfMembers, decreaseNumOfMembers] = useCounter(
    numberOfPeople ?? 1,
    1,
  );
  const [showSelectDate, setShowSelectDate] = useState(false);
  const [tripDate, setTripDate] = useRecoilState(tripDateState);

  // 초기 날짜
  const [initialStartDate, setInitialStartDate] = useState<Date | null>(null);
  const [initialEndDate, setInitialEndDate] = useState<Date | null>(null);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      setTripDate({ startDate: start, endDate: end });
      setInitialStartDate(start);
      setInitialEndDate(end);

      if (tripName) {
        setTitle(tripName);
      }
    }
  }, [tripName, startDate, endDate]);

  const handleSubmit = async () => {
    try {
      let adjustedStartDate = startDate ? new Date(startDate) : null;
      let adjustedEndDate = endDate ? new Date(endDate) : null;

      if (tripDate.startDate && tripDate.startDate !== initialStartDate) {
        adjustedStartDate = new Date(tripDate.startDate);
        adjustedStartDate.setDate(adjustedStartDate.getDate() + 1);
      }

      if (tripDate.endDate && tripDate.endDate !== initialEndDate) {
        adjustedEndDate = new Date(tripDate.endDate);
        adjustedEndDate.setDate(adjustedEndDate.getDate() + 1);
      }

      const tripRequestData = {
        tripName: title,
        numberOfPeople: numOfMembers,
        startDate: adjustedStartDate
          ? adjustedStartDate.toISOString().split('T')[0]
          : null,
        endDate: adjustedEndDate
          ? adjustedEndDate.toISOString().split('T')[0]
          : null,
      };

      if (tripId) {
        await putTrips(tripId, tripRequestData);
        navigate(`/trip/${tripId}`);
        window.location.reload();
      }
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
    <div className="flex h-[95vh] flex-col">
      <BackBox
        showBack={true}
        backHandler={() => {
          navigate(-1);
        }}
        children="여정 수정하기"
      />
      <div className="pb-[18px]" />

      <InputField icon={PlanIcon}>
        <input
          type="text"
          className="body1 min-w-0 flex-1 p-2 focus:outline-none"
          placeholder={title || ''}
          value={title || ''}
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
        <div className="body1 flex-1 p-2">인원</div>
        <div className="ml-auto flex items-center justify-center">
          {numOfMembers !== 1 && (
            <button
              className="flex size-[24px] items-center justify-center rounded-full text-gray3"
              onClick={decreaseNumOfMembers}>
              <CounterIcon minus />
            </button>
          )}
          <div className="body1 flex-1 px-4">{numOfMembers}</div>
          <button
            className="flex size-[24px] items-center justify-center rounded-full text-white"
            onClick={increaseNumOfMembers}>
            <CounterIcon plus />
          </button>
        </div>
      </InputField>

      <InputField
        icon={CalendarIcon}
        onClick={() => {
          setShowSelectDate(true);
        }}
        isClickable>
        <div className="body1 p-2">{formattedTripDate}</div>
      </InputField>

      <div className="mt-auto">
        <ButtonPrimary onClick={handleSubmit}>완료</ButtonPrimary>
      </div>
    </div>
  );
};

export default TripEdit;
