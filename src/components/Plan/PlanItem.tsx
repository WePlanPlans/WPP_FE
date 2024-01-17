import SubmitBtn from '@components/common/button/SubmitBtn';
import { PlusIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';
import TripMap from './TripMap';
import PlanItemBox from './PlanItemBox';
import { useContext, useEffect } from 'react';
import { socketContext } from '@hooks/useSocket';
import { useRecoilState } from 'recoil';
import { visitDateState } from '@recoil/socket';
import { pubGetPathAndItems } from '@api/socket';
import { tripIdState } from '@recoil/socket';
import { useRecoilValue } from 'recoil';

const PlanItem = (date: any) => {
  const navigate = useNavigate();
  const tripId = useRecoilValue(tripIdState);
  const [visitDate, setVisitDate] = useRecoilState(visitDateState);
  const { tripItem, tripPath, callBackPub } = useContext(socketContext);

  useEffect(() => {
    setVisitDate({ visitDate: date.date });
  }, [date.date]);

  useEffect(() => {
    if (visitDate && tripId) {
      callBackPub(() => pubGetPathAndItems(visitDate, tripId));
    }
  }, [visitDate]);

  return (
    <>
      {tripPath && <TripMap paths={tripPath.data?.paths || []} />}
      <div className="flex flex-col gap-[5px]">
        {tripItem?.data?.tripItems ? (
          tripItem.data.tripItems.map((item) => (
            <PlanItemBox key={item.tripItemId} item={item} />
          ))
        ) : (
          <div>여행 항목 정보가 없습니다.</div>
        )}
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
