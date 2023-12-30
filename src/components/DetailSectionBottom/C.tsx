import { ReactComponent as PenIcon } from '../../assets/images/Pen.svg';
import { ReactComponent as CalendarIcon } from '../../assets/images/Calendar.svg';

export default function C() {
  return (
    <div className="mt-2 flex w-full items-center justify-between py-2.5">
      <button className="flex h-[53px] w-[157.5px] items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2">
        <CalendarIcon />
        <span className="text-sm">일정 추가</span>
      </button>
      <button className="flex h-[53px] w-[157.5px] items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2">
        <PenIcon />
        <span className="text-sm">리뷰 쓰기</span>
      </button>
    </div>
  );
}
