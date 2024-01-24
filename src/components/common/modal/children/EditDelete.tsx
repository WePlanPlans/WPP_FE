import { DeleteIcon, PenIcon } from '@components/common/icons/Icons';
import {
  alertTypeState,
  isModalOpenState,
  modalChildrenState,
  titleState,
} from '@recoil/modal';
import {
  contentState,
  contentTypeIdState,
  isModifyingCommentState,
  isModifyingReviewState,
  keywordsState,
  ratingState,
  targetReviewIdState,
  tourItemIdState,
} from '@recoil/review';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const EditDelete: React.FC = () => {
  const rating = useRecoilValue(ratingState);
  const keywords = useRecoilValue(keywordsState);
  const content = useRecoilValue(contentState);
  const title = useRecoilValue(titleState);
  const targetReviewId = useRecoilValue(targetReviewIdState);
  const tourItemId = useRecoilValue(tourItemIdState);
  const contentTypeId = useRecoilValue(contentTypeIdState);
  const setIsModifyingReview = useSetRecoilState(isModifyingReviewState);
  const setIsModifyingComment = useSetRecoilState(isModifyingCommentState);
  const navigate = useNavigate();
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalChildren = useSetRecoilState(modalChildrenState);
  const setAlertType = useSetRecoilState(alertTypeState);
  // const setInputFocus = useSetRecoilState(inputFocusState);

  const handleEdit = () => {
    if (title == '내 리뷰') {
      setIsModifyingReview(true);
      setIsModalOpen(false);
      navigate(`/reviewPosting/${tourItemId}`, {
        state: {
          title,
          contentTypeId,
          targetReviewId,
          rating,
          keywords,
          content,
        },
      });
    } else if (title == '내 댓글') {
      setIsModifyingComment(true);
      setIsModalOpen(false);
      // setInputFocus(true);
    }
  };

  const handleDelete = async () => {
    if (title === '내 리뷰') {
      setModalChildren('MyAlert');
      setAlertType('DeleteReview');
    } else if (title === '내 댓글') {
      setModalChildren('MyAlert');
      setAlertType('DeleteComment');
    }
  };

  return (
    <div className="m-[-20px] text-[15px]">
      <div className="h-[48px]  pl-[25px] pt-[20px] font-bold">{title}</div>
      <div className="">
        <button
          onClick={handleEdit}
          className="flex h-[52px] w-full cursor-pointer items-center gap-1  pl-[20px]">
          <PenIcon size={24} color="#888888" className="mt-0.5" />
          <p className="pl-[5px] text-gray7">수정하기</p>
        </button>
        <button
          onClick={handleDelete}
          className="flex h-[52px] w-full cursor-pointer items-center gap-1  pl-[20px]">
          <DeleteIcon size={24} color="#888888" />
          <p className="pl-[5px] text-gray7">삭제하기</p>
        </button>
      </div>
    </div>
  );
};

export default EditDelete;
