import * as Dialog from '@radix-ui/react-dialog';
import { CalendarIcon } from '@components/common/icons/Icons';
import Alert from '@components/common/alert/Alert';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '@components/common/icons/Icons';
import { useGetMyTrips } from '@hooks/useGetMyTrips';
import { calculateTripDuration } from '@utils/calculateTripDuration';
import { calculateDayAndDate } from '@utils/utils';

const DetailAddSchedule = () => {
  const { myTrips } = useGetMyTrips();
  const tripDuration = calculateTripDuration(
    myTrips[0]?.startDate,
    myTrips[0]?.endDate,
  );

  const { SmallDayArr } = calculateDayAndDate(
    myTrips[0]?.startDate,
    myTrips[0]?.endDate,
  );

  console.log(SmallDayArr);

  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/login');
  };

  const handleCreate = () => {
    navigate('/create');
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex h-[53px] w-1/2 items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2 pr-4 ">
          <CalendarIcon className="mb-[2px]" />
          <span className="text-sm ">일정 추가</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-10 bg-black opacity-70" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[97%] z-10 max-h-[85vh] w-[412px] translate-x-[-50%] translate-y-[-90%] rounded-tl-[16px] rounded-tr-[16px] bg-white p-[20px] pb-[50px]  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Close className="text-mauve12 m-0 flex w-full justify-end text-[17px] font-medium">
            <button
              onClick={handleCreate}
              className="btn-base h-[40px] w-[145px] rounded-full bg-main2 p-0 text-[14px] font-bold text-white disabled:cursor-not-allowed disabled:bg-gray3">
              <div className="flex items-center justify-center gap-[6px] text-center">
                <PlusIcon size={8} color="white" className="mb-[2px]" />
                새로운 여행 만들기
              </div>
            </button>
          </Dialog.Close>

          <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
            {myTrips.map((trip, index) => {
              // 각 여행에 대한 기간을 계산합니다.
              const tripDuration = calculateTripDuration(
                trip.startDate,
                trip.endDate,
              );

              return (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start gap-4">
                  <div className="flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2">
                    <div className="relative mb-[8px] flex h-14 w-[375px] flex-shrink-0 flex-grow-0 items-center justify-start gap-[9px]">
                      <img
                        src={trip.tripThumbnailUrl}
                        alt={`Thumbnail for ${trip.tripName}`}
                        className="h-[52px] w-[52px] flex-shrink-0 flex-grow-0 rounded-lg object-cover"
                      />
                      <div className="relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start">
                        <div className="w-[270px] flex-shrink-0 flex-grow-0 text-left text-base font-bold text-[#1e1e1e]">
                          {trip.tripName}
                        </div>
                        <div className="h-[17px] w-[270px] flex-shrink-0 flex-grow-0 text-left text-sm font-medium text-[#888]">
                          {trip.startDate?.replace(/-/g, '.')} -{' '}
                          {trip.endDate?.substring(5).replace(/-/g, '.')} (
                          {tripDuration})
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex items-start justify-start gap-1">
              <div className="relative flex h-10 flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded-[168px] border-[1.25px] border-solid border-[#29ddf6] px-8 py-2">
                <div className="flex-shrink-0 flex-grow-0 text-left text-sm font-medium text-[#29ddf6]">
                  Day 1
                </div>
              </div>
            </div>
          </Dialog.Description>
          <Alert
            title={'로그인'}
            message={
              <>
                일정 추가 시 로그인이 필요합니다.
                <br />
                로그인 하시겠습니까?
              </>
            }
            onConfirm={handleConfirm}>
            <div className="mt-[25px] flex justify-end">
              <button className="btn-base h-14 bg-main2 text-base font-bold text-white disabled:cursor-not-allowed disabled:bg-gray3">
                일정 추가하기
              </button>
            </div>
          </Alert>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DetailAddSchedule;
