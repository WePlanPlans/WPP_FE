import { PenIcon, CarIcon, BusIcon } from '@components/common/icons/Icons';
import { TripItem, Paths } from '@/@types/service';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

type PlanItemBoxProps = {
  item: TripItem[];
  paths: Paths[];
  transportation: string;
};

const PlanItemBox = ({ item, paths, transportation }: PlanItemBoxProps) => {
  if (!item || !paths) {
    return <div>Missing data</div>;
  }

  const itemLength = item.length;

  return (
    <>
      <div>
        {item.map((item, index) => (
          <React.Fragment key={item.tripItemId}>
            <div className="flex h-[87.5px] w-full rounded-lg border border-solid border-[#ededed] bg-white">
              <img
                className="h-[87px] w-[93px] rounded-bl-lg rounded-tl-lg "
                src={item.thumbnailUrl}
                alt="img"
              />
              <div className="flex w-full flex-col p-[10px]">
                <div className="flex justify-between text-left text-[14px] font-medium text-black">
                  {item.name}
                  <PenIcon size={14} className="cursor-pointer" />
                </div>
                <div className="mt-[3px] flex h-fit w-fit items-center justify-center gap-2 rounded-[3px] bg-[#ededed] p-[4px] text-center text-[11px] text-black">
                  {item.category}
                </div>
                <div className="mt-[15px] text-sm font-bold text-black">
                  {item.price} 원
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
                        {(path.pathInfo.totalDistance / 1000).toFixed(2)}km,{' '}
                        {path.pathInfo.totalTime}분,{' '}
                        {path.pathInfo.price.toLocaleString()}원
                      </div>
                    </div>
                  </div>
                ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default PlanItemBox;
