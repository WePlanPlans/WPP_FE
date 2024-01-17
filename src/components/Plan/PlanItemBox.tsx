import { PenIcon } from '@components/common/icons/Icons';
import { TripItem } from '@/@types/service';

type PlanItemBoxProps = {
  item: TripItem;
};

const PlanItemBox = ({ item }: PlanItemBoxProps) => {
  if (!item) {
    return <div>error...</div>;
  }

  return (
    <>
      <div>
        <div className="flex h-[87.5px] w-full rounded-lg border border-solid border-[#ededed] bg-white">
          <img
            className="h-[87.5px] w-[93px] rounded-bl-lg rounded-tl-lg"
            src={item.thumbnailUrl}
            alt="img"
          />
          <div className="flex w-full flex-col p-[10px]">
            <div className="flex justify-between text-left text-[14px] font-medium text-black">
              {item.name}
              <PenIcon size={14} className="cursor-pointer" />
            </div>

            <div className="mt-[3px] flex h-fit w-fit items-center justify-center gap-2 rounded-[3px] bg-[#ededed] p-[4px] text-[11px] text-black">
              {item.category}
            </div>
            <div className="mt-[15px] text-sm font-bold text-black">
              {item.price} 원
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanItemBox;
