import { UserIcon } from '@components/common/icons/Icons';

const TripInfo = () => {
  return (
    <div className="my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="title1 mb-[10px] mr-1">강릉 여행 일정</div>
          <div className="flex items-center pb-[10px]">
            <UserIcon size={20} fill="#888" color="#888" />
            <span className="body4 pt-[1px] text-gray4">5</span>
          </div>
        </div>
        <button className="body3 text-gray3">편집</button>
      </div>
      <span className="body1 text-gray4">23.12.23 ~ 23.12.25</span>
    </div>
  );
};

export default TripInfo;
