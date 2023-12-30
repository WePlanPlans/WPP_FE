import { ReactComponent as MapIcon } from '../../assets/images/Map.svg';
import { ReactComponent as CheckIcon } from '../../assets/images/Check.svg';
import { ReactComponent as PhoneIcon } from '../../assets/images/Phone.svg';

export default function DetailToursMap() {
  return (
    <div className="mt-4 w-full">
      <div className="flex items-center justify-between gap-2.5">
        <div className="flex">
          <MapIcon />
          <span className="ml-1 text-sm">강원 강릉시 창해로 307</span>
        </div>
        <CheckIcon className="cursor-pointer" />
      </div>
      <div className="border-8 border-sky-500 py-10 text-sm">지도 정보</div>
      <div className="flex gap-1">
        <PhoneIcon />
        <span className="text-sm">064-743-0703</span>
      </div>
    </div>
  );
}
