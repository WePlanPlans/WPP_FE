import { ButtonWhite } from '@components/common/button/Button';
import { MoreIcon, CarIcon, BusIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';
import TripMap from './TripMap';
import PlanItemBox from './PlanItemBox';
import { useContext, useEffect } from 'react';
import { socketContext } from '@hooks/useSocket';
import { useRecoilState } from 'recoil';
import { visitDateState } from '@recoil/socket';
import { pubGetPathAndItems, pubUpdateTransportation } from '@api/socket';
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

  const handleTranspo = (
    transportation: 'CAR' | 'PUBLIC_TRANSPORTATION',
    visitDate: string,
    tripId: number,
  ) => {
    callBackPub(() =>
      pubUpdateTransportation(
        {
          visitDate: visitDate,
          transportation: transportation,
        },
        tripId,
      ),
    );
  };

  const transpo = tripItem?.data?.transportation || '';

  return (
    <>
      {tripPath && <TripMap paths={tripPath.data?.paths || []} />}

      <div className="mb-[31px] mt-[31px] flex items-center justify-between">
        <div className="flex  items-center justify-center">
          <div
            onClick={handleTranspo}
            className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-l-md border border-solid border-gray3">
            <CarIcon
              size={19}
              color={transpo === 'CAR' ? '#000000' : '#d7d7d7'}
            />
          </div>
          <div
            onClick={handleTranspo}
            className="pointer-cursor -ml-[1px] flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-r-md border border-solid border-gray3">
            <BusIcon
              size={19}
              color={
                transpo === 'PUBLIC_TRANSPORTATION' ? '#000000' : '#d7d7d7'
              }
            />
          </div>
        </div>
        <div className="flex h-8 w-[46px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#f0f0f0] p-2 text-sm font-medium text-gray4">
          편집
        </div>
      </div>

      <div className="flex flex-col gap-[5px]">
        <PlanItemBox
          item={tripItem?.data?.tripItems || []}
          paths={tripPath?.data?.paths || []}
          transportation={transpo}
        />
      </div>
      <div className="mt-[18px]">
        <ButtonWhite
          onClick={() => navigate('./place')}
          className="h-[40px] w-full">
          <div className=" flex items-center justify-center gap-[5px] font-bold text-gray4">
            <MoreIcon className="text-gray4" />
            장소 추가하기
          </div>
        </ButtonWhite>
      </div>
    </>
  );
};

export default PlanItem;
