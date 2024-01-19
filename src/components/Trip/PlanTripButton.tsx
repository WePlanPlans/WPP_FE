import { PlanColorIcon, RightIcon } from '@components/common/icons/Icons';

const PlanTripButton = () => {
  return (
    <button className="body3 mb-10 mt-6 flex w-full items-center justify-between rounded-[8px] bg-[#F3F4F5] px-[15px] py-[15px] text-gray7 text-main1">
      <div className="flex items-center justify-start ">
        <div>
          <PlanColorIcon />
        </div>
        <p className="body1 ml-[12px] text-gray5">여행 계획하기</p>
      </div>
      <div>
        <RightIcon fill="#888888" />
      </div>
    </button>
  );
};

export default PlanTripButton;
