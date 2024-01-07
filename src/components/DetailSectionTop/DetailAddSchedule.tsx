import * as Dialog from '@radix-ui/react-dialog';
import { CalendarIcon } from '@components/common/icons/Icons';
import { PlusIcon } from '@components/common/icons/Icons';

import { Cross2Icon } from '@radix-ui/react-icons';

const DetailAddSchedule = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="flex h-[53px] w-1/2 items-center justify-center gap-2 rounded-xl border border-solid border-gray3 p-2 ">
        <CalendarIcon />
        일정 추가
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />

      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-10 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Close className="text-mauve12 m-0 flex w-full justify-end text-[17px] font-medium">
          <button className="btn-base h-[50px] w-[116px] rounded-full bg-main1 p-0 text-[16px] font-bold text-white disabled:cursor-not-allowed disabled:bg-gray3">
            + 여행 생성하기
          </button>
        </Dialog.Close>

        <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="btn-base bg-main1 text-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-gray3">
              일정 추가하기
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DetailAddSchedule;
