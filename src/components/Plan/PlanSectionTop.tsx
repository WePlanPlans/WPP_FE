import TripInfo from '@components/Trip/TripInfo';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';
import TripBudget from './TripBudget';
import Tab from '@components/common/tab/Tab';
import PlanItem from './PlanItem';
import { socketContext } from '@hooks/useSocket';
import { useContext } from 'react';
import { pubEnterMember } from '@api/socket';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { tripIdState, memberIdState } from '@recoil/socket';
import { calculateDayAndDate } from '@utils/utils';

const PlanSectionTop = () => {
  const navigate = useNavigate();
  const tripId = useRecoilValue(tripIdState);
  const pubMember = useRecoilValue(memberIdState);

  if (!pubMember || !tripId) {
    return <div>에러</div>;
  }

  const { callBackPub, tripInfo } = useContext(socketContext);

  useEffect(() => {
    callBackPub(() => pubEnterMember(pubMember, tripId));
  }, []);

  let DayArr: string[] = [];
  let DateArr: string[] = [];

  const startDate = tripInfo?.data?.startDate;
  const endDate = tripInfo?.data?.endDate;

  if (startDate && endDate) {
    ({ DayArr, DateArr } = calculateDayAndDate(startDate, endDate));
  }

  return (
    <div className="min-h-screen">
      <BackBox
        showBack={true}
        showShare={true}
        backHandler={() => {
          navigate(-1);
        }}
      />
      <TripInfo />
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
