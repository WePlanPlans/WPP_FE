import { UserIcon } from '@components/common/icons/Icons';
import { socketContext } from '@hooks/useSocket';
import { useContext } from 'react';

const TripInfo = () => {
  const { tripInfo } = useContext(socketContext);
  const trip = tripInfo?.data;

  return (
    <div className="my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="title1 mb-[10px] mr-1">{trip?.tripName}</div>
          <div className="flex items-center pb-[10px]">
            <UserIcon size={20} fill="#888" color="#888" />
            <span className="body4 pt-[1px] text-gray4">
              {trip?.numberOfPeople}
            </span>
          </div>
        </div>
        <button className="body4 rounded-[8px] bg-[#F0F0F0] px-[10px] py-[8px] text-gray4">
          편집
        </button>
      </div>
      <span className="body1 text-gray4">
        {trip?.startDate} ~ {trip?.endDate}
      </span>
    </div>
  );
};

export default TripInfo;
