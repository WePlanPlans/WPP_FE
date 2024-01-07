import React from 'react';
import { ButtonWhite, ButtonPrimary } from '@components/common/button/Button';
import { deleteReview } from '@api/review';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  targetReviewIdState,
  tourItemIdState,
  alertState,
} from '@recoil/review';
import { isModalOpenState } from '@recoil/modal';
const DeleteAlert = ({}) => {
  const navigate = useNavigate();
  const tourItemId = useRecoilValue(tourItemIdState);
  const targetReviewId = useRecoilValue(targetReviewIdState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setAlert = useSetRecoilState(alertState);

  const handleDeleteButton = async () => {
    await deleteReview(targetReviewId);
    setIsModalOpen(false);
    navigate(`/detail/${tourItemId}`);
    window.location.reload();
    setAlert(() => ({
      isAlert: true,
      noun: '리뷰',
      verb: '삭제',
    }));
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="mt-4 flex justify-center font-bold">리뷰 삭제</div>
      <div className="mb-4 flex justify-center text-sm text-[#888888]">
        리뷰를 삭제할까요?
      </div>
      <div className="flex gap-3 ">
        <ButtonWhite
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="text-xs">
          취소
        </ButtonWhite>
        <ButtonPrimary onClick={handleDeleteButton} className="text-xs">
          삭제
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default DeleteAlert;
