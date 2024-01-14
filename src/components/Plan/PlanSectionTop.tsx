import TripInfo from '@components/Trip/TripInfo';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';
import TripBudget from './TripBudget';
import Tab from '@components/common/tab/Tab';
import PlanItem from './PlanItem';

const PlanSectionTop = () => {
  const navigate = useNavigate();
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
