import { PlanIcon, RightIcon } from '@components/common/icons/Icons';

const PlanTripButton = () => {
  return (
    <button className="body3 my-6 flex w-full items-center justify-between rounded-[8px] bg-[#F3F4F5] px-[15px] py-[15px] text-gray7 text-main1">
      <div className="flex items-center justify-start">
        <PlanIcon />
        여행 계획하기
      </div>
      <RightIcon />
    </button>
  );
};

export default PlanTripButton;
