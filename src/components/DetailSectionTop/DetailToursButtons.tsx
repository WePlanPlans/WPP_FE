import DetailAddSchedule from '@components/DetailSectionTop/DetailAddSchedule';
import { PenIcon } from '@components/common/icons/Icons';
import { Modal } from '@components/common/modal';
import MyAlert from '@components/common/modal/children/MyAlert';
import { isModalOpenState, modalChildrenState } from '@recoil/modal';
import { isModifyingReviewState } from '@recoil/review';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

interface reviewProps {
  reviewData: any;
}

export default function DetailTourButtons({ reviewData }: reviewProps) {
  const { title, contentTypeId } = reviewData;
  const params = useParams();
  const tourItemId = Number(params.id);
  const navigate = useNavigate();
  const setIsModifyingReview = useSetRecoilState(isModifyingReviewState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const [modalChildren, setModalChildren] = useRecoilState(modalChildrenState);

  const handlePostingReivew = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      navigate(`/reviewPosting/${tourItemId}`, {
        state: { title, contentTypeId },
      });
    } else {
      setIsModifyingReview(false);
      setModalChildren('EditDelete');
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-2 flex w-full items-center justify-between gap-3 py-2.5">
        <DetailAddSchedule />
        <button className="flex h-[53px] w-1/2 items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2">
          <PenIcon />
          <span className="text-sm" onClick={handlePostingReivew}>
            리뷰 쓰기
          </span>
        </button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {modalChildren === 'MyAlert' && (
          <MyAlert
            title="로그인"
            content="리뷰 쓰기 시 로그인이 필요해요. 로그인하시겠어요?"
          />
        )}
      </Modal>
    </>
  );
}
