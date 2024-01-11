import DetailAddSchedule from '@components/DetailSectionTop/DetailAddSchedule';
import { PenIcon } from '@components/common/icons/Icons';
import {
  isModalOpenState,
  modalChildrenState,
  alertTypeState,
} from '@recoil/modal';
import { isModifyingReviewState } from '@recoil/review';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { getItem } from '@utils/localStorageFun';

interface reviewProps {
  reviewData: any;
}

export default function DetailTourButtons({ reviewData }: reviewProps) {
  const { title, contentTypeId } = reviewData;
  const params = useParams();
  const tourItemId = Number(params.id);
  const navigate = useNavigate();
  const setIsModifyingReview = useSetRecoilState(isModifyingReviewState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalChildren = useSetRecoilState(modalChildrenState);
  const setAlertType = useSetRecoilState(alertTypeState);

  const handlePostingReivew = () => {
    const token = getItem('accessToken');
    if (token) {
      navigate(`/reviewPosting/${tourItemId}`, {
        state: { title, contentTypeId },
      });
    } else {
      setModalChildren('MyAlert');
      setAlertType('LoginReview');
      setIsModifyingReview(false);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="mt-2 flex w-full items-center justify-between gap-3 py-2.5">
        <DetailAddSchedule />
        <button
          onClick={handlePostingReivew}
          className="flex h-[53px] w-1/2 items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2">
          <PenIcon />
          <span className="text-sm ">리뷰 쓰기</span>
        </button>
      </div>
    </>
  );
}
