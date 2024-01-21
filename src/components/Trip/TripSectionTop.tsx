import Tab from '@components/common/tab/Tab';
import TripPreference from './TripPreference';
import TripInfo from './TripInfo';
import { BackBox } from '@components/common';
import { useNavigate } from 'react-router-dom';
import PlanTripButton from './PlanTripButton';
import { LikedToursList } from './LikedToursList';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';
import { useEffect, useState } from 'react';
import IsEditableModal from '@components/Share/IsEditableModal';

const TripSectionTop = () => {
  const navigate = useNavigate();
  const { tripAuthority } = useGetTripsAuthority();
  const [isEditable, setIsEditable] = useState<boolean>(false);

  useEffect(() => {
    if (tripAuthority !== null) {
      if (tripAuthority !== 'WRITE') {
        setIsEditable(true);
      }
    }
  }, [tripAuthority]);

  return (
    <div className="min-h-screen">
      <IsEditableModal isEditable={isEditable} setIsEditable={setIsEditable} />
      <BackBox
        showBack={true}
        backHandler={() => {
          navigate(-1);
        }}
        showShare={true}
        shareHandler={() => {
          navigate('share');
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
