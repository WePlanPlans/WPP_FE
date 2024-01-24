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
import { getMember } from '@api/member';

export default function DetailTourButtons({
  reviewData,
}: {
  reviewData: tourDetail;
}) {
  const { title, contentTypeId } = reviewData;
  const params = useParams();
  const tourItemId = Number(params.id);
  const navigate = useNavigate();
  const setIsModifyingReview = useSetRecoilState(isModifyingReviewState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalChildren = useSetRecoilState(modalChildrenState);
  const setAlertType = useSetRecoilState(alertTypeState);

  const handlePostingReivew = async () => {
    try {
      const res = await getMember();
      if (res.data.status === 200) {
        navigate(`/reviewPosting/${tourItemId}`, {
          state: { title, contentTypeId },
        });
      }
    } catch (err) {
      console.error(err);
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
          className="flex h-[53px] w-1/2 items-center justify-center gap-2 rounded-lg border border-solid border-gray3 p-2 pr-4">
          <PenIcon className="mt-[3px]" />
          <span className="text-sm ">리뷰 쓰기</span>
        </button>
      </div>
    </>
  );
}
