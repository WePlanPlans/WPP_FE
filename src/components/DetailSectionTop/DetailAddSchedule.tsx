import * as Dialog from '@radix-ui/react-dialog';
import { CalendarIcon, GrayCalendarIcon } from '@components/common/icons/Icons';
import Alert from '@components/common/alert/Alert';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '@components/common/icons/Icons';
import { useGetMyTrips } from '@hooks/useGetMyTrips';
import { calculateTripDuration } from '@utils/calculateTripDuration';
import { calculateDayAndDate } from '@utils/utils';
import Accordion from '@components/common/accordion/Accordion';
import { useState, useEffect } from 'react';
import { postTripsItem } from '@api/trips';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import ToastPopUp from '@components/common/toastpopup/ToastPopUp';

const DetailAddSchedule = () => {
  const token = localStorage.getItem('accessToken');

  const navigate = useNavigate();
  const { id: tourItemId } = useParams();
  const { myTrips } = useGetMyTrips();
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedVisitDate, setSelectedVisitDate] = useState<string | null>(
    null,
  );
  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const initialValue = myTrips.findIndex(
    (trip) => trip.tripStatus !== '여행완료',
  );

  const [toastPopUp, setToastPopUp] = useState({
    isPopUp: false,
    noun: '',
    verb: '',
  });

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  const handleDateButtonClick = (
    tripId: string | null,
    visitDate: string | null,
    index: number | null,
  ) => {
    setSelectedTripId(tripId);
    setSelectedVisitDate(visitDate);
    setSelectedButton(index);
  };

  const handleAccordion = (newValue: string) => {
    setOpenAccordion(newValue);
    setSelectedButton(null);
  };

  const handlePostTripsItem = async (
    tripId: string,
    tourItemId: string,
    visitDate: string,
  ) => {
    if (isProcessing) return;
    setIsProcessing(true);
    if (tripId && tourItemId && visitDate) {
      try {
        await postTripsItem(tripId, tourItemId, visitDate);
        setIsOpen(false);
      } catch (error) {
        console.error('요청 실패:', error);
      } finally {
        setToastPopUp(() => ({
          isPopUp: true,
          noun: '일정',
          verb: '추가',
        }));
        setIsProcessing(false);
      }
    }
  };

  useEffect(() => {
    setOpenAccordion(`item-${initialValue}`);
  }, [initialValue]);

  useEffect(() => {
    if (!isOpen) {
      setOpenAccordion(`item-${initialValue}`);
      setSelectedButton(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (toastPopUp.isPopUp) {
      const timer = setTimeout(() => {
        setToastPopUp(() => ({
          isPopUp: false,
          noun: '',
          verb: '',
        }));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [toastPopUp]);

  return (
    <>
      {toastPopUp.isPopUp && (
        <ToastPopUp noun={toastPopUp.noun} verb={toastPopUp.verb} />
      )}
      {token ? (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <button className="flex h-[53px] w-1/2 items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2 pr-4 ">
              <CalendarIcon className="mb-[2px]" color="#5E5E5E" />
              <span className="text-sm text-gray5">일정 추가</span>
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-10 bg-black opacity-70" />
            <Dialog.Content
              className={`fixed left-[50%] top-[97%] z-10 w-[100vw] max-w-[412px] translate-x-[-50%] translate-y-[-90%] rounded-tl-[16px] rounded-tr-[16px] bg-white p-[20px] pb-[50px] focus:outline-none ${
                myTrips.length > 0 ? 'h-[392px]' : 'h-[276px]'
              }`}>
              <div className="text-mauve12 m-0 flex w-full justify-end text-[17px] font-medium">
                <button
                  onClick={() => handleNavigate('/create')}
                  className="btn-base mb-[14px] h-[40px] w-[145px] rounded-full bg-main2 text-[14px] font-bold text-white disabled:cursor-not-allowed disabled:bg-gray3">
                  <div className="flex items-center justify-center gap-[6px] text-center">
                    <PlusIcon size={8} color="white" className="mb-[2px]" />
                    새로운 여행 만들기
                  </div>
                </button>
              </div>
              {myTrips.length > 0 ? (
                <Dialog.Description className="text-mauve11 mb-5 mt-[10px] h-[180px] overflow-x-hidden overflow-y-scroll text-[15px] leading-normal">
                  {myTrips.map((trip, index) => {
                    if (trip.tripStatus !== '여행완료') {
                      const tripDuration = calculateTripDuration(
                        trip.startDate,
                        trip.endDate,
                      );
                      const { SmallDayArr, DateArr } = calculateDayAndDate(
                        trip.startDate,
                        trip.endDate,
                      );
                      return (
                        <>
                          <Accordion
                            key={index}
                            value={`item-${index}`}
                            openAccordion={openAccordion}
                            setOpenAccordion={handleAccordion}
                            title={
                              <div
                                key={index}
                                className="flex flex-col items-start justify-start gap-4">
                                <div className="flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2">
                                  <div className="relative mb-[8px] flex h-14 w-[407px] flex-shrink-0 flex-grow-0 items-center justify-start gap-[9px]">
                                    <img
                                      src={trip.tripThumbnailUrl}
                                      alt={`Thumbnail for ${trip.tripName}`}
                                      className="h-[56px] w-[56px] flex-shrink-0 flex-grow-0 rounded-lg object-cover"
                                    />
                                    <div className="relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start">
                                      <div className="w-[270px] flex-shrink-0 flex-grow-0 text-left text-base font-bold text-[#1e1e1e]">
                                        {trip.tripName}
                                      </div>
                                      <div className="h-[17px] w-[270px] flex-shrink-0 flex-grow-0 text-left text-sm font-medium text-[#888]">
                                        {trip.startDate?.replace(/-/g, '.')} -{' '}
                                        {trip.endDate
                                          ?.substring(5)
                                          .replace(/-/g, '.')}{' '}
                                        {tripDuration === '0박 1일'
                                          ? ''
                                          : `(${tripDuration})`}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            }
                            content={
                              <div className="mb-[16px] flex items-start justify-start gap-1">
                                <Swiper
                                  className="w-full"
                                  spaceBetween={4}
                                  slidesPerView={'auto'}
                                  centeredSlides={false}>
                                  {SmallDayArr.map((day, index) => (
                                    <SwiperSlide
                                      key={index}
                                      className="flex w-[99px] items-start">
                                      <button
                                        className={`relative flex h-10 w-[99px] flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded-[168px] border-[1.25px] border-solid ${
                                          index === selectedButton
                                            ? 'border-main2'
                                            : 'border-gray3'
                                        } px-8 py-2`}
                                        onClick={() =>
                                          handleDateButtonClick(
                                            trip.tripId,
                                            DateArr[index],
                                            index,
                                          )
                                        }>
                                        <div
                                          className={`flex-shrink-0 flex-grow-0 text-left text-sm font-medium ${
                                            index === selectedButton
                                              ? 'text-main2'
                                              : 'text-gray4'
                                          }`}>
                                          {day}
                                        </div>
                                      </button>
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                              </div>
                            }
                          />
                        </>
                      );
                    }
                  })}
                </Dialog.Description>
              ) : (
                <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
                  <div className="mt-[40px] flex flex-col items-center justify-center text-center">
                    <GrayCalendarIcon />
                    <p className="mt-[16px] flex-shrink-0 flex-grow-0 text-left text-sm font-semibold text-[#888]">
                      참여하고 있는 여정이 없어요.
                    </p>
                  </div>
                </Dialog.Description>
              )}
              {myTrips.length > 0 ? (
                <div className="mt-[32px] flex justify-end">
                  <button
                    disabled={
                      selectedButton === null ||
                      !selectedTripId ||
                      !selectedVisitDate
                    }
                    onClick={() =>
                      handlePostTripsItem(
                        selectedTripId || '',
                        tourItemId || '',
                        selectedVisitDate || '',
                      )
                    }
                    className="btn-base h-14 bg-main2 text-base font-bold text-white disabled:cursor-not-allowed disabled:bg-gray3">
                    일정 추가하기
                  </button>
                </div>
              ) : (
                ''
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ) : (
        <Alert
          title={'로그인'}
          message={
            <>
              일정에 추가하려면 로그인이 필요해요.
              <br />
              로그인하러 가볼까요?
            </>
          }
          onConfirm={() => handleNavigate('/login')}>
          <button className="flex h-[53px] w-1/2 items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2 pr-4 ">
            <CalendarIcon className="mb-[2px]" color="#5E5E5E" />
            <span className="text-sm text-gray5">일정 추가</span>
          </button>
        </Alert>
      )}
    </>
  );
};

export default DetailAddSchedule;
