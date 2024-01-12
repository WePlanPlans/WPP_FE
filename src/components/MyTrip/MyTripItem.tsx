import { MyTripType } from '@/@types/trips.types';
import { MoreIcon } from '@components/common/icons/Icons';

interface MyTripItemProps {
  myTripList: MyTripType;
}

const MyTripItem: React.FC<MyTripItemProps> = ({ myTripList }) => {
  const {
    tripName,
    startDate,
    endDate,
    numberOfTripMembers,
    tripStatus,
    tripThumbnailUrl,
  } = myTripList;

  const ACTIVE_TRIP = '여행 중';

  return (
    <div className="relative cursor-pointer pb-4">
      <div className="flex min-h-[96px]">
        <div>
          <img
            className="rounded-1 h-[96px] min-h-[96px] w-[96px] rounded-[16px] object-cover"
            src={tripThumbnailUrl}
            alt="여행지 이미지"
          />
          <div className="absolute right-[0px] top-[0px] z-10 w-[24px]">
            <MoreIcon size={20} fill="gray3" color="gray3" />
          </div>
        </div>
        <div className="ml-[10px] flex flex-col items-start justify-between gap-[15px]">
          <div className="max-w-[300px]">
            <div
              className={`inline-flex  ${
                tripStatus === ACTIVE_TRIP ? 'bg-cyan-400' : 'border-cyan-400'
              } h-[22px] items-center justify-center gap-[8px] rounded-2xl border border-solid border-cyan-400  px-[8px] py-[10px] pt-[11px]`}>
              <span
                className={`text-xs font-semibold ${
                  tripStatus === ACTIVE_TRIP ? 'text-white' : 'text-cyan-400'
                }`}>
                {tripStatus}
              </span>
            </div>
            <div className="mt-[7.5px] w-56 truncate text-base font-bold text-black">
              {tripName}
            </div>
            <div className="h-4 w-56 font-['Pretendard'] text-sm font-medium tracking-tight text-zinc-500">
              {startDate} ~ {endDate}
            </div>
            <div className="mt-[7.5px] inline-flex h-4 w-56 items-start justify-start gap-2">
              <div className=" text-xs font-normal text-zinc-500">
                {numberOfTripMembers}명과 공유중
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTripItem;
