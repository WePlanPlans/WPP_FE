import SubmitBtn from '@components/common/button/SubmitBtn';
import { PlusIcon, CarIcon, BusIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';
import TripMap from './TripMap';
import PlanItemBox from './PlanItemBox';
import { useContext } from 'react';
import { socketContext } from '@hooks/useSocket';
import { pubEnterMember } from '@api/socket';

const memberId = {
  memberId: 1,
};
const visitDate = '2024-01-04';

const PlanItem = () => {
  const navigate = useNavigate();
  const { tripItem, tripPath } = useContext(socketContext);

  // console.log(tripItem);

  // pubEnterMember(memberId, visitDate);
  // console.log('펍후', tripItem);

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
