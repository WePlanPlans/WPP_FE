import { UserIcon } from '@components/common/icons/Icons';
import { useGetTrips } from '@hooks/useGetTrips';
import EditCodeModal from './EditCodeModal';

export const TripSchedule = () => {
  const { tripName, startDate, endDate, numberOfPeople } = useGetTrips();

  return (
    <>
      <hr className="my-3 border-solid border-gray2" />
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="title1 mb-[10px] mr-1">{tripName}</div>
          <div className="flex items-center pb-[10px]">
            <UserIcon size={20} fill="#888" color="#888" />
            <span className="body4 pt-[1px] text-gray4">{numberOfPeople}</span>
          </div>
        </div>

        {/* <div className="flex">
          <button className="body3 rounded-lg border-2 border-solid border-gray2 p-2 text-gray4">
            편집
          </button>
        </div> */}
        <EditCodeModal />
      </div>
      <span className="body1 text-gray4">
        {startDate?.substring(2).replace(/-/g, '.') || ''} -{' '}
        {endDate?.substring(5).replace(/-/g, '.') || ''}
      </span>
    </>
  );
};
