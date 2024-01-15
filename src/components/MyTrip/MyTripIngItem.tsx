import { useNavigate } from 'react-router-dom';
import { calculateTripDuration } from '@utils/calculateTripDuration';

interface MyTripItemProps {
  myTripList: MyTripType;
}

const MyTripIngItem: React.FC<MyTripItemProps> = ({ myTripList }) => {
  const { tripId, tripName, startDate, endDate, tripThumbnailUrl, tripStatus } =
    myTripList;

  const navigate = useNavigate();
  const tripDuration = calculateTripDuration(startDate, endDate);

  return (
    <div
      className="relative flex h-16 w-full cursor-pointer items-center rounded-lg border border-solid border-cyan-400 px-3"
      // 아이템 클릭시 이동 위치
      onClick={() => navigate('/')}>
      <div className="flex">
        <div>
          <img
            className="rounded-1 h-10 min-h-10 w-10 rounded-lg object-cover"
            src={tripThumbnailUrl}
            alt="여행지 이미지"
          />
        </div>
        <div className="absolute right-3 top-[20px] inline-flex h-[22px] w-[54px] items-center justify-center gap-[8px] rounded-2xl border border-solid border-cyan-400 bg-cyan-400 px-[8px] py-[10px] pt-[12px]">
          <span className="text-xs font-semibold text-white">{tripStatus}</span>
        </div>
        <div className="ml-[15px] flex max-w-[300px] flex-col items-start justify-between gap-[15px] ">
          <div className="mt-[4px] ">
            <div className="w-56 truncate text-sm font-bold text-black ">
              {tripName}
            </div>

            <div className="text-xs font-medium tracking-tight text-zinc-500">
              {startDate.replace(/-/g, '.')} ~{' '}
              {endDate.replace(/-/g, '.').split('2024.')} ({tripDuration})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTripIngItem;
