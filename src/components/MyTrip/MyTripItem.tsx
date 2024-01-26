import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
    numberOfTripMember,
    tripThumbnailUrl,
  } = myTripList;

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const tripDuration = calculateTripDuration(startDate, endDate);

  const { mutate: deleteMyTripMutate } = useMutation({
    mutationFn: (tripId: string) => deleteTrips(tripId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myTrips'] });
    },
    onError: () => console.log('error'),
  });

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => deleteMyTripMutate(tripId)}>
        <div className="flex min-h-[72px] min-w-[64px] items-center justify-center bg-gray3">
          <span className="text-xs font-semibold text-white">나가기</span>
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem trailingActions={trailingActions()}>
        <div
          className="relative mb-[10px] cursor-pointer"
          onClick={() => navigate(`/trip/${tripId}`)}>
          <div className="flex min-h-[72px]">
            <div>
              <img
                className="rounded-1 h-[72px] min-h-[72px] min-w-[72px] rounded-[16px] object-cover"
                src={tripThumbnailUrl}
                alt="여행지 이미지"
              />
            </div>
            <div className="ml-[10px] mt-[-2px] flex w-full flex-col items-start justify-between  ">
              <div>
                <div className="truncate text-[15px] text-base font-bold text-stone-900">
                  {tripName}
                </div>
                <div className="text-[14px] font-normal text-gray5">
                  {startDate.replace(/-/g, '.')} -{' '}
                  {endDate.replace(/-/g, '.').split('2024.')}
                  {tripDuration === '0박 1일' ? null : ` (${tripDuration})`}
                </div>
              </div>

              <div className="flex pt-[2px] text-xs font-normal text-zinc-500">
                <UserIcon size={13} fill="#888" color="none" />
                <span>{numberOfTripMember}명과 공유중</span>
              </div>
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default MyTripItem;
