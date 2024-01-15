import SubmitBtn from '@components/common/button/SubmitBtn';
import { PlusIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';
import TripMap from './TripMap';
import PlanItemBox from './PlanItemBox';
import { useContext } from 'react';
import { socketContext } from '@hooks/useSocket';
import { pubEnterMember } from '@api/socket';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { tripIdState, memberIdState } from '@recoil/socket';

const PlanItem = () => {
  const navigate = useNavigate();
  const tripId = useRecoilValue(tripIdState);
  const pubMember = useRecoilValue(memberIdState);
  const { callBackPub, tripItem, tripPath } = useContext(socketContext);

  if (!pubMember || !tripId) {
    return <div>에러</div>;
  }

  useEffect(() => {
    callBackPub(() => pubEnterMember(pubMember, tripId));
  }, []);

  return (
    <>
      {tripPath && <TripMap paths={tripPath.data?.paths || []} />}
      <div className="flex flex-col gap-[5px]">
        {tripItem?.data?.tripItems.map((item) => (
          <PlanItemBox key={item.tripItemId} item={item} />
        ))}
      </div>
      <SubmitBtn onClick={() => navigate('./place')}>
        <div className="flex items-center justify-center gap-[5px]">
          <PlusIcon color="white" />
          장소 추가
        </div>
      </SubmitBtn>
    </>
  );
};

export default PlanItem;
