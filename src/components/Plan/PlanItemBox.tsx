import {
  PenIcon,
  CarIcon,
  BusIcon,
  SequenceIcon,
  CloseIcon,
} from '@components/common/icons/Icons';
import { TripItem, Paths } from '@/@types/service';
import { v4 as uuidv4 } from 'uuid';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';
import Alert from '@components/common/alert/Alert';
import { useContext, useState } from 'react';
import { socketContext } from '@hooks/useSocket';
import { pubUpdatePrice } from '@api/socket';

type PlanItemBoxProps = {
  item: TripItem[];
  paths: Paths[];
  transportation: string;
  day: string;
  visitDate: string;
};

const PlanItemBox = ({
  item,
  paths,
  transportation,
  day,
  visitDate,
}: PlanItemBoxProps) => {
  if (!item || !paths) {
    return <div>Missing data</div>;
  }
  const { tripAuthority } = useGetTripsAuthority();
  const { tripId } = useContext(socketContext);

  const itemLength = item.length;
  const [inputPrice, setInputPrice] = useState('');
  const showCloseIcon = inputPrice;

  const handlePrice = (inputBudget: string, tripItemId: number) => {
    if (inputBudget && tripItemId) {
      pubUpdatePrice(
        {
          tripId: tripId,
          visitDate: visitDate,
          price: inputBudget,
        },
        tripItemId,
      );
      setInputPrice('');
    }
  };

  const formatTime = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours === 0) {
      return `${minutes}분`;
    }
    return `${hours}시간 ${minutes}분`;
  };

  return (
    <>
      <div>
        <div className="text-left text-sm font-semibold">{day}</div>
        {item.map((item, index) => (
          <div key={item.tripItemId} className="flex">
            <div className="relative ml-[5px] mr-[17px] flex h-[87.5px] items-center">
              {index !== 0 ? (
                <div className="absolute bottom-0 left-[47%] h-[145px] w-[1px] bg-gray3" />
              ) : (
                <div className="absolute left-[47%] top-0 h-[87.5px] w-[1px] bg-gray3" />
              )}
              <SequenceIcon className="z-10" number={item.seqNum} />
            </div>
            <div className="flex w-full flex-col">
              <div className="flex h-[88.5px] rounded-lg border border-solid border-[#ededed] bg-white">
                <img
                  className="h-[87px] w-[93px] rounded-bl-lg rounded-tl-lg"
                  src={item.thumbnailUrl}
                  alt="img"
                />
                <div className="flex h-[88px] w-full flex-col px-[10px] py-[8px]">
                  <div className="text-left text-[14px] font-medium text-black">
                    {item.name.length > 16
                      ? item.name.slice(0, 16) + '...'
                      : item.name}
                  </div>
                  <div className="mb-[11px] mt-[4px] flex h-[16px] w-fit items-center justify-center rounded-[3px] bg-[#ededed] px-[4px] py-[8px] text-center text-[11px] text-black">
                    <div className="flex h-[13px] items-center justify-center text-center">
                      {item.category}
                    </div>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-black">
                    {item.price.toLocaleString()} 원
                    {tripAuthority == 'WRITE' && (
                      <Alert
                        title={'비용을 입력해주세요'}
                        message={''}
                        onConfirm={() =>
                          handlePrice(inputPrice, item.tripItemId)
                        }
                        closeOnConfirm={true}
                        children={
                          <button>
                            <PenIcon size={14} />
                          </button>
                        }
                        content={
                          <div className="mb-6 mt-8 flex w-[95%] items-center justify-between border-b-[1px] border-solid border-gray4">
                            <div className="flex w-full items-center justify-between">
                              <input
                                type="number"
                                className="title3 w-full pl-[2px] text-gray6 placeholder:text-gray4 focus:outline-none"
                                placeholder="금액"
                                value={inputPrice}
                                onChange={(e) => setInputPrice(e.target.value)}
                              />
                              <div
                                className="ml-[-16px] cursor-pointer"
                                onClick={() => setInputPrice('')}>
                                {showCloseIcon && (
                                  <CloseIcon size={16} fill="#D7D7D7" />
                                )}
                              </div>
                            </div>
                            <span className="title3 pl-[4.5px] text-gray4">
                              원
                            </span>
                          </div>
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              {index < itemLength - 1 &&
                paths
                  .filter((path) => path.fromSeqNum === item.seqNum)
                  .map((path) => (
                    <div
                      key={uuidv4()}
                      className="mb-[8px] mt-[8px] flex h-10 w-full items-center justify-center rounded-lg border border-solid border-[#ededed] bg-white">
                      <div className="flex w-full items-center justify-center text-center text-[11px] text-black">
                        <div className="mr-[7.5px] flex h-[24px] w-[24px] items-center justify-center rounded-xl bg-[#F3F4F5]">
                          {transportation === 'CAR' ? (
                            <CarIcon size={16} />
                          ) : transportation === 'PUBLIC_TRANSPORTATION' ? (
                            <BusIcon size={16} />
                          ) : null}
                        </div>
                        <div className="mt-[3px]">
                          {path.pathInfo.totalDistance < 0 ||
                          path.pathInfo.totalTime < 0 ||
                          path.pathInfo.price < 0
                            ? '경로 정보가 없습니다.'
                            : `${(path.pathInfo.totalDistance / 1000).toFixed(
                                2,
                              )}km, ${formatTime(
                                path.pathInfo.totalTime,
                              )}, ${path.pathInfo.price.toLocaleString()}원`}
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlanItemBox;
