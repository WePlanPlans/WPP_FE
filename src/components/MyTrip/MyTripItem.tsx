import { useNavigate } from 'react-router-dom';
import { calculateTripDuration } from '@utils/calculateTripDuration';
import { deleteTrips } from '@api/trips';
import { UserIcon } from '@components/common/icons/Icons';

import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
interface MyTripItemProps {
  myTripList: MyTripType;
}

const MyTripItem: React.FC<MyTripItemProps> = ({ myTripList }) => {
  const {
    tripId,
    tripName,
    startDate,
    endDate,
    numberOfPeople,
    tripThumbnailUrl,
  } = myTripList;

  const navigate = useNavigate();
  const tripDuration = calculateTripDuration(startDate, endDate);

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => deleteTrips(tripId)}>
        <div className="flex min-h-[72px] min-w-[64px] items-center justify-center bg-gray3">
          <span className="text-xs font-semibold text-white">삭제</span>
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem trailingActions={trailingActions()}>
        <div
          className="relative mb-[10px] cursor-pointer"
          // 아이템 클릭시 이동 위치
          onClick={() => navigate('/')}>
          <div className="flex min-h-[72px]">
            <div>
              <img
                className="rounded-1 h-[72px] min-h-[72px] w-[72px] rounded-[16px] object-cover"
                src={tripThumbnailUrl}
                alt="여행지 이미지"
              />
            </div>
            <div className="ml-[10px] flex w-full flex-col items-start justify-between  ">
              <div className="mt-[1px] ">
                <div className="truncate text-[15px] text-base font-bold text-black">
                  {tripName}
                </div>
                <div className="text-sm font-medium tracking-tight text-zinc-500">
                  {startDate.replace(/-/g, '.')} ~{' '}
                  {endDate.replace(/-/g, '.').split('2024.')} ({tripDuration})
                </div>
              </div>

              <div className="mb-[5px] flex text-xs font-normal text-zinc-500">
                <UserIcon size={13} fill="gray4" />
                <span className="ml-[4px]">{numberOfPeople}명과 공유중</span>
              </div>
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default MyTripItem;