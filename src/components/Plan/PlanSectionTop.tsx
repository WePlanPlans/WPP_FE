import TripRealtimeMember from '@components/Trip/TripRealtimeMember';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';
import TripBudget from './TripBudget';
import Tab from '@components/common/tab/Tab';
import PlanItem from './PlanItem';
import { socketContext } from '@hooks/useSocket';
import { useContext } from 'react';
import {
  pubEnterMember,
  pubConnectMember,
  pubDisconnectMember,
} from '@api/socket';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { dayState, dateState } from '@recoil/plan';
import { calculateDayAndDate } from '@utils/utils';
import { useGetTrips } from '@hooks/useGetTrips';
import { visitDateState } from '@recoil/socket';
import { useState } from 'react';
import { getItem } from '@utils/localStorageFun';
import PlanSchedule from './PlanSchedule';

const PlanSectionTop = () => {
  const navigate = useNavigate();
  const [, setDay] = useRecoilState(dayState);
  const [, setDate] = useRecoilState(dateState);
  const {
    callBackPub,
    tripId,
    tripInfo,
    tripItem,
    tripPath,
    tripMember,
    tripBudget,
  } = useContext(socketContext);
  const [, setVisitDate] = useRecoilState(visitDateState);
  const { startDate, endDate } = useGetTrips();
  const [isEnter, setIsEnter] = useState(false);

  let DayArr: string[] = [];
  let DateArr: string[] = [];

  if (startDate && endDate) {
    ({ DayArr, DateArr } = calculateDayAndDate(startDate, endDate));
  }

  useEffect(() => {
    if (startDate) {
      setVisitDate({ visitDate: startDate });
    }
    setDay(DayArr);
    setDate(DateArr);
  }, [startDate, endDate]);

  useEffect(() => {
    callBackPub(() => pubEnterMember(tripId));
  }, []);

  useEffect(() => {
    if (tripInfo && tripItem && tripPath && tripMember && tripBudget) {
      setIsEnter(true);
    }
  }, [tripInfo, tripItem, tripPath, tripMember, tripBudget]);

  useEffect(() => {
    if (isEnter) {
      const accessToken = getItem('accessToken');
      if (accessToken) {
        callBackPub(() => {
          pubConnectMember({ token: accessToken || '' }, tripId);
        });

        return () => {
          callBackPub(() =>
            pubDisconnectMember({ token: accessToken || '' }, tripId),
          );
        };
      }
    }
  }, [isEnter]);

  return (
    <div className="min-h-screen">
      <BackBox
        showBack={true}
        backHandler={() => {
          navigate(-1);
        }}
        showShare={true}
        shareHandler={() => {
          navigate(`/trip/${tripId}/share`);
        }}
      />
      <TripRealtimeMember />
      <PlanSchedule />
      <TripBudget />
      <Tab
        lists={DayArr}
        contents={DateArr.map((date, index) => (
          <PlanItem key={date} date={date} day={DayArr[index]} />
        ))}
      />
    </div>
  );
};

export default PlanSectionTop;
