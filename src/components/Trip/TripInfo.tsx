import { UserIcon } from '@components/common/icons/Icons';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isModalOpenState, modalChildrenState } from '@recoil/modal';
import TripSurveyMember from '@components/common/modal/children/TripSurveyMember';
import { Modal } from '@components/common/modal';

const TripInfo = () => {
  const modalChildren = useRecoilValue(modalChildrenState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="my-5">
        <div className="flex items-center justify-between">
          <div className="body1 text-gray7">프로필</div>
          <div className="body1 text-gray7"> 1명과 공유중</div>
        </div>
        <hr className="mb-6 mt-3 border-solid border-gray2" />
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
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {modalChildren === 'TripSurveyMember' && <TripSurveyMember />}
      </Modal>
    </>
  );
};

export default TripInfo;
