import { BackBox } from '@components/common';
import {
  CalendarIcon,
  PaperIcon,
  SearchIcon,
  UserIcon,
} from '@components/common/icons/Icons';

const TripEdit = () => {
  return (
    <>
      <BackBox showBack={true}>여정 수정하기</BackBox>

      <form className="flex min-h-full flex-col gap-[16px] py-8">
        <div className="flex items-center justify-start rounded-lg border border-[1px] border-solid border-[#D7D7D7] px-[14px] py-[8px]">
          <div className="pb-[1.2px]">
            <PaperIcon size={25} color="#1E1E1E" />
          </div>
          <p className="body1 flex py-[3px] pl-[8px] text-gray4">나의 여정 N</p>
        </div>

        <div className="flex items-center justify-start rounded-lg border border-[1px] border-solid border-[#D7D7D7] px-[14px] py-[8px]">
          <div className="pb-[1.2px]">
            <UserIcon size={22} color="#1E1E1E" />
          </div>
          <p className="body1 flex py-[3px] pl-[3px] text-gray4">인원</p>
        </div>

        <div className="flex items-center justify-start rounded-lg border border-[1px] border-solid border-[#D7D7D7] px-[14px] py-[8px]">
          <div className="pb-[1px]">
            <CalendarIcon size={22} color="#1E1E1E" />
          </div>
          <p className="body1 flex py-[3px] pl-[5px] text-gray4">
            2023.12.14 ~ 2024.12.16
          </p>
        </div>

        <div className="flex items-center justify-start rounded-lg border border-[1px] border-solid border-[#D7D7D7] px-[14px] py-[8px]">
          <div className="pb-[1.2px]">
            <SearchIcon size={18} color="#1E1E1E" />
          </div>
          <p className="body1 flex py-[3px] pl-[7px] text-gray4">
            강릉 ・ 속초
          </p>
        </div>

        <button className="headline1 fixed bottom-6 min-h-[40px] w-[375px] cursor-pointer rounded-lg bg-main2 p-[16px] text-white">
          완료
        </button>
      </form>
    </>
  );
};

export default TripEdit;
