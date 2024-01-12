import Tab from '@components/common/tab/Tab';
import TripInfo from './TripInfo';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';
import PlanTripButton from './PlanTripButton';

const TripSectionTop = () => {
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
      <PlanTripButton />
      <Tab
        lists={['우리의 여행취향', '우리의 관심목록']}
        contents={[<div>우리의 여행취향</div>, <div>우리의 관심목록</div>]}
      />
    </div>
  );
};

export default TripSectionTop;
