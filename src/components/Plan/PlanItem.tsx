import { ButtonWhite } from '@components/common/button/Button';
import { PlusIcon, CarIcon, BusIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';
import TripMap from './TripMap';
import PlanItemBox from './PlanItemBox';
import PlanEditItemBox from './PlanEditItemBox';
import { useContext, useEffect } from 'react';
import { socketContext } from '@hooks/useSocket';
import { useRecoilState, useRecoilValue } from 'recoil';
import { visitDateState, isEditState } from '@recoil/socket';
import { pubGetPathAndItems, pubUpdateTransportation } from '@api/socket';
import { tapState } from '@recoil/plan';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';

type PlanItemProps = {
  date: string;
  day: string;
};

const PlanItem: React.FC<PlanItemProps> = ({ date, day }) => {
  const navigate = useNavigate();
  const { tripAuthority } = useGetTripsAuthority();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  const tap = useRecoilValue(tapState);
  const [, setVisitDate] = useRecoilState(visitDateState);
  const { tripItem, tripPath, callBackPub, tripId } = useContext(socketContext);

  useEffect(() => {
    if (tap) {
      setVisitDate({ visitDate: date });
      if (date && tripId) {
        callBackPub(() => pubGetPathAndItems({ visitDate: date }, tripId));
      }
      setIsEdit(false);
    }
  }, [tap]);

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleTranspo = (
    transportation: 'CAR' | 'PUBLIC_TRANSPORTATION',
    date: string,
    tripId: string,
  ) => {
    if (transportation !== transpo) {
      callBackPub(() =>
        pubUpdateTransportation(
          {
            visitDate: date,
            transportation: transportation,
          },
          tripId,
        ),
      );
    }
  };

  const transpo = tripItem?.data?.transportation || '';

  return (
    <>
      {tripPath && <TripMap paths={tripPath.data?.paths || []} />}

      <div className="mb-[31px] mt-[31px] flex items-center justify-between">
        {tripAuthority !== 'WRITE' || isEdit ? (
          <div />
        ) : (
          <div className="flex items-center justify-center">
            <div
              onClick={() => handleTranspo('CAR', date || '', tripId || '')}
              className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-l-md border border-solid border-gray3">
              <CarIcon
                size={19}
                color={transpo === 'CAR' ? '#000000' : '#d7d7d7'}
              />
            </div>
            <div
              onClick={() =>
                handleTranspo('PUBLIC_TRANSPORTATION', date || '', tripId || '')
              }
              className="pointer-cursor -ml-[1px] flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-r-md border border-solid border-gray3">
              <BusIcon
                size={19}
                color={
                  transpo === 'PUBLIC_TRANSPORTATION' ? '#000000' : '#d7d7d7'
                }
              />
            </div>
          </div>
        )}
        {tripAuthority !== 'WRITE' ? (
          ''
        ) : (
          <button
            type="button"
            onClick={handleEdit}
            className="flex h-8 w-[46px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#f0f0f0] p-2 text-sm font-medium text-gray4">
            {isEdit ? '완료' : '편집'}
          </button>
        )}
      </div>

      <div className="flex flex-col gap-[5px]">
        {isEdit ? (
          <PlanEditItemBox
            item={tripItem?.data?.tripItems || []}
            day={day}
            visitDate={date || ''}
            tripId={tripId || ''}
          />
        ) : (
          <PlanItemBox
            item={tripItem?.data?.tripItems || []}
            paths={tripPath?.data?.paths || []}
            transportation={transpo}
            day={day}
          />
        )}
      </div>

      {tripAuthority !== 'WRITE' || isEdit ? (
        <div className="mt-[18px]" />
      ) : (
        <div className="my-[18px]">
          <ButtonWhite
            onClick={() => navigate('./place')}
            className="h-[40px] w-full">
            <div className="flex items-center justify-center gap-[5px] font-bold text-gray4">
              <PlusIcon size={15} color="#888" />
              <div className="mt-[1px]">장소 추가하기</div>
            </div>
          </ButtonWhite>
        </div>
      )}
    </>
  );
};

export default PlanItem;
