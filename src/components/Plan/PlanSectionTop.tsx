import TripInfo from '@components/Trip/TripInfo';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';
import TripBudget from './TripBudget';
import Tab from '@components/common/tab/Tab';
import { pubEnterMember, pubConnectMember } from '@api/socket';
import { useEffect } from 'react';
import PlanItem from './PlanItem';
import { useContext } from 'react';
import { socketContext } from '@hooks/useSocket';

const tripId = '1';
const pubMember = {
  memberId: 1, // 예시 값
};
const visitDate = { visitDate: '2024-01-03' };

const PlanSectionTop = () => {
  const navigate = useNavigate();

  const { callBackPub, tripInfo, tripItem, tripPath, tripMember, tripBudget } =
    useContext(socketContext);

  useEffect(() => {
    callBackPub(() => pubEnterMember(pubMember, tripId));
  }, []);

  // console.log(tripInfo);
  // console.log(tripItem);
  // console.log(tripPath);
  // console.log(tripMember);
  // console.log(tripBudget);

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
        lists={['Day1', 'Day2', 'Day3']}
        contents={[<div>Day1</div>, <div>Day2</div>, <div>Day3</div>]}
      />

      <PlanItem />
    </div>
  );
};

export default PlanSectionTop;
