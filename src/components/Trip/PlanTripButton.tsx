import { PlanColorIcon, RightIcon } from '@components/common/icons/Icons';
import { useNavigate } from 'react-router-dom';
import { getMember } from '@api/member';

const PlanTripButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      const res = await getMember();
      if (res.data.status === 200) {
        navigate('plan');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className="body3 mb-10 mt-6 flex w-full items-center justify-between rounded-[8px] bg-[#F3F4F5] px-[15px] py-[15px] text-gray7 text-main1">
      <div className="flex items-center justify-start ">
        <div className="pt-0.5">
          <PlanColorIcon />
        </div>
        <p className="ml-2 text-[15px] text-gray5">여행 계획하기</p>
      </div>
      <div className="pt-0.5">
        <RightIcon fill="#888888" />
      </div>
    </button>
  );
};

export default PlanTripButton;
