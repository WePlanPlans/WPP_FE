import Tab from '@components/common/tab/Tab';
import TripPreference from './TripPreference';
import TripInfo from './TripInfo';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';
import PlanTripButton from './PlanTripButton';
import { LikedToursList } from './LikedToursList';

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
        contents={[<TripPreference />, <LikedToursList />]}
      />
    </div>
  );
};

export default TripSectionTop;
