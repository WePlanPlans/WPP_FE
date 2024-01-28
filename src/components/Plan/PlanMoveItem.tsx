import * as Dialog from '@radix-ui/react-dialog';
import { PaperIcon } from '@components/common/icons/Icons';
import { useRecoilValue } from 'recoil';
import { dayState, dateState } from '@recoil/plan';
import { pubUpdateVisitDate } from '@api/socket';
import { useState, useEffect } from 'react';
import ToastPopUp from '@components/common/toastpopup/ToastPopUp';
import { useRecoilState } from 'recoil';
import { isEditState } from '@recoil/socket';

interface PlanMoveItemProps {
  isCheck: number | null;
  tripId: string | null;
  visitDate: string | null;
}

const PlanMoveItem: React.FC<PlanMoveItemProps> = ({
  isCheck,
  tripId,
  visitDate,
}) => {
  const [, setIsEdit] = useRecoilState(isEditState);
  const day = useRecoilValue(dayState);
  const date = useRecoilValue(dateState);

  const [toastPopUp, setToastPopUp] = useState({
    isPopUp: false,
    noun: '',
    verb: '',
  });

  const handleMoveItem = (newVisitDate: string) => {
    if (visitDate === newVisitDate) {
      return;
    }
    if (tripId && isCheck && visitDate) {
      pubUpdateVisitDate(
        {
          tripId: tripId,
          oldVisitDate: visitDate,
          newVisitDate: newVisitDate,
        },
        isCheck,
      );
    }
    setToastPopUp(() => ({
      isPopUp: true,
      noun: '날짜 이동',
      verb: '완료',
    }));
    setIsEdit(false);
  };

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
      <Dialog.Root>
        <Dialog.Trigger asChild disabled={!isCheck}>
          <button
            type="button"
            className="flex w-[206px] items-center justify-center gap-2 bg-main2 p-2 font-bold text-white">
            날짜 이동
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-10 bg-black opacity-70" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[97%] z-10 h-[238px] w-[100vw] max-w-[412px] translate-x-[-50%] translate-y-[-90%] rounded-tl-[16px] rounded-tr-[16px] bg-white pb-[34px] focus:outline-none">
            <Dialog.Description className="text-mauve11 mt-[10px] text-[15px] leading-normal">
              <div className="relative flex flex-col items-start justify-start">
                <div className="absolute left-0 top-0 flex flex-col items-start justify-start">
                  <div className="relative flex h-12 w-[95vw] max-w-[395px] flex-shrink-0 flex-grow-0 items-center justify-start gap-2 rounded-tl-2xl rounded-tr-2xl bg-white px-5 pb-1 pt-2">
                    <p className="w-full flex-shrink-0 flex-grow-0 text-left text-[15px] font-bold text-[#1e1e1e]">
                      날짜 이동
                    </p>
                  </div>
                  <div className="flex h-[156px] flex-shrink-0 flex-grow-0 flex-col items-start justify-start overflow-y-scroll">
                    <div className="flex h-[52px] w-[95vw] max-w-[395px] flex-shrink-0 flex-grow-0 flex-col justify-start gap-4  bg-white px-5 py-3 ">
                      {day.map((day, index) => (
                        <Dialog.Close asChild key={day}>
                          <button
                            onClick={() => handleMoveItem(date[index])}
                            className="mb-[12px] flex h-[24px] items-center gap-[8px]">
                            <PaperIcon />
                            <p className="mb-[5px] h-[18px] text-[15px] font-medium text-[#1e1e1e]">
                              {day}
                            </p>
                          </button>
                        </Dialog.Close>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default PlanMoveItem;
