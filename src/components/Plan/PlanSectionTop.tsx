import TripRealtimeMember from '@components/Trip/TripRealtimeMember';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';
import TripBudget from './TripBudget';
import Tab from '@components/common/tab/Tab';
import PlanItem from './PlanItem';
import { socketContext } from '@hooks/useSocket';
import { useContext, useRef } from 'react';
import {
  pubEnterMember,
  pubConnectMember,
  pubDisconnectMember,
} from '@api/socket';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { dayState, dateState, isFirstLoadState } from '@recoil/plan';
import { calculateDayAndDate, resetVisitDateAndTab } from '@utils/utils';
import { useGetTrips } from '@hooks/useGetTrips';
import { visitDateState } from '@recoil/socket';
import { useState } from 'react';
import { getItem } from '@utils/localStorageFun';
import PlanSchedule from './PlanSchedule';
import PlanCursor from './PlanCursor';
import PlanOtherCursor from './PlanOtherCursor';
import ScrollTopButton from '@components/common/scrollTopButton/ScrollTopButton';
import { isMobile } from 'react-device-detect';

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
  const [isFirstLoad, setIsFirstLoad] = useRecoilState(isFirstLoadState);

  const { startDate, endDate } = useGetTrips();
  const [isEnter, setIsEnter] = useState(false);

  const cursorAreaRef = useRef<HTMLDivElement>(null);

  let DayArr: string[] = [];
  let DateArr: string[] = [];

  if (startDate && endDate) {
    ({ DayArr, DateArr } = calculateDayAndDate(startDate, endDate));
  }

  useEffect(() => {
    if (isFirstLoad && startDate) {
      setVisitDate({ visitDate: startDate });
      setIsFirstLoad(false);
    }
    setDay(DayArr);
    setDate(DateArr);
  }, [startDate, endDate, isFirstLoad]);

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
        pubConnectMember({ token: accessToken || '' }, tripId);

        return () => {
          pubDisconnectMember({ token: accessToken || '' }, tripId);
        };
      }
    }
  }, [isEnter]);

  return (
    <div className="cursor-area min-h-screen" ref={cursorAreaRef}>
      {!isMobile && (
        <>
          <PlanCursor props={cursorAreaRef} />
        </>
      )}
      <PlanOtherCursor />
      <BackBox
        showBack={true}
        backHandler={() => {
          navigate(-1);
          resetVisitDateAndTab();
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
      <ScrollTopButton />
    </div>
  );
};

export default PlanSectionTop;
