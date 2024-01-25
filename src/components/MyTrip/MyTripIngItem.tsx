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
      className="relative flex h-16 w-full cursor-pointer items-center rounded-2xl border border-solid border-cyan-400 bg-cyan-400 px-3"
      onClick={() => navigate(`/trip/${tripId}`)}>
      <div className="flex">
        <div>
          <img
            className="h-10 min-h-10 w-10 rounded-3xl  object-cover"
            src={tripThumbnailUrl}
            alt="여행지 이미지"
          />
        </div>
        <div className="absolute right-3 top-[20px] inline-flex h-[22px] w-[54px] items-center justify-center gap-[8px] rounded-2xl border border-solid border-cyan-400 bg-white px-[8px] py-[10px] pt-[13px]">
          <span className="text-xs font-semibold text-cyan-400">
            {tripStatus}
          </span>
        </div>
        <div className="ml-[15px] flex max-w-[300px] flex-col items-start justify-between gap-[15px] ">
          <div className="mt-[4px] ">
            <div className="w-56 truncate text-sm font-bold text-white ">
              {tripName}
            </div>

            <div className="text-xs font-semibold text-white">
              {startDate.replace(/-/g, '.')} -{' '}
              {endDate.replace(/-/g, '.').split('2024.')}{' '}
              {tripDuration === '0박 1일' ? null : ` (${tripDuration})`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTripIngItem;
