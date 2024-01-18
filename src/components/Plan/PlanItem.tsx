import { ButtonWhite } from '@components/common/button/Button';
import { PlusIcon, CarIcon, BusIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';
import TripMap from './TripMap';
import PlanItemBox from './PlanItemBox';
import PlanEditItemBox from './PlanEditItemBox';
import { useContext, useEffect, useState } from 'react';
import { socketContext } from '@hooks/useSocket';
import { useRecoilState } from 'recoil';
import { visitDateState } from '@recoil/socket';
import { pubGetPathAndItems, pubUpdateTransportation } from '@api/socket';
import { tripIdState } from '@recoil/socket';
import { useRecoilValue } from 'recoil';

type PlanItemProps = {
  date: string;
  day: string;
};

const PlanItem: React.FC<PlanItemProps> = ({ date, day }) => {
  const navigate = useNavigate();
  const [isEdit, SetIsEdit] = useState(false);

  const tripId = useRecoilValue(tripIdState);
  const [visitDate, setVisitDate] = useRecoilState(visitDateState);
  const { tripItem, tripPath, callBackPub } = useContext(socketContext);

  useEffect(() => {
    setVisitDate({ visitDate: date });
  }, [date]);

  useEffect(() => {
    if (visitDate && tripId) {
      callBackPub(() => pubGetPathAndItems(visitDate, tripId));
    }
  }, [visitDate]);

  const handleEdit = () => {
    SetIsEdit((prev) => !prev);
  };

  const handleTranspo = (
    transportation: 'CAR' | 'PUBLIC_TRANSPORTATION',
    visitDate: string,
    tripId: string,
  ) => {
    if (transportation !== transpo) {
      callBackPub(() =>
        pubUpdateTransportation(
          {
            visitDate: visitDate,
            transportation: transportation,
          },
          tripId,
        ),
      );
    }
  };

  const transpo = tripItem?.data?.transportation || '';

  console.log(tripItem);

  return (
    <>
      {tripPath && <TripMap paths={tripPath.data?.paths || []} />}

      <div className="mb-[31px] mt-[31px] flex items-center justify-between">
        {isEdit ? (
          <div />
        ) : (
          <div className="flex  items-center justify-center">
            <div
              onClick={() =>
                handleTranspo('CAR', visitDate?.visitDate || '', tripId || '')
              }
              className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-l-md border border-solid border-gray3">
              <CarIcon
                size={19}
                color={transpo === 'CAR' ? '#000000' : '#d7d7d7'}
              />
            </div>
            <div
              onClick={() =>
                handleTranspo(
                  'PUBLIC_TRANSPORTATION',
                  visitDate?.visitDate || '',
                  tripId || '',
                )
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

        <button
          onClick={handleEdit}
          className="flex h-8 w-[46px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#f0f0f0] p-2 text-sm font-medium text-gray4">
          {isEdit ? '완료' : '편집'}
        </button>
      </div>

      <div className="flex flex-col gap-[5px]">
        {isEdit ? (
          <PlanEditItemBox
            item={tripItem?.data?.tripItems || []}
            day={day}
            visitDate={visitDate?.visitDate || ''}
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
      <div className="mt-[18px]">
        {isEdit ? (
          <div className="flex w-full justify-center">
            <div className="flex h-14">
              <div className="flex w-[206px] items-center justify-center gap-2 bg-gray3 p-2 font-bold text-white">
                삭제하기
              </div>
              <div className="flex w-[206px] items-center justify-center gap-2 bg-main2 p-2 font-bold text-white">
                날짜 이동
              </div>
            </div>
          </div>
        ) : (
          <ButtonWhite
            onClick={() => navigate('./place')}
            className="h-[40px] w-full">
            <div className="flex items-center justify-center gap-[5px] font-bold text-gray4">
              <PlusIcon size={15} color="#888" />
              <div className="mt-[1px]">장소 추가하기</div>
            </div>
          </ButtonWhite>
        )}
      </div>
    </>
  );
};

export default PlanItem;
