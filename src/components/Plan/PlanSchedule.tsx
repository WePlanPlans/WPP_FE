import { UserIcon } from '@components/common/icons/Icons';
import { socketContext } from '@hooks/useSocket';
import { useContext } from 'react';

const PlanSchedule = () => {
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
      </div>
      <span className="body1 text-gray4">
        {trip?.startDate} ~ {trip?.endDate}
      </span>
    </div>
  );
};

export default PlanSchedule;
