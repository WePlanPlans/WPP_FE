import { UserIcon } from '@components/common/icons/Icons';

export const TripSchedule = () => {
  return (
    <>
      <hr className="mb-6 mt-3 border-solid border-gray2" />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="title1 mb-[10px] mr-1">강릉 여행 일정</div>
          <div className="flex items-center pb-[10px]">
            <UserIcon size={20} fill="#888" color="#888" />
            <span className="body4 pt-[1px] text-gray4">5</span>
          </div>
        </div>
        <button className="body3 rounded-lg border-2 border-solid border-gray2 p-2 text-gray4">
          편집
        </button>
      </div>
      <span className="body1 text-gray4">23.12.23 - 23.12.25</span>
    </>
  );
};
