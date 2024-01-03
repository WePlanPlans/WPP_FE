import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { DeleteIcon, PenIcon } from '@components/common/icons/Icons';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { titleState } from '@recoil/modal';
import { deleteReview, putReview } from '@api/review';
import { deleteComments, putComments } from '@api/comments';
import {
  ratingState,
  keywordsState,
  contentState,
  targetReviewIdState,
  reviewDataState,
  targetCommentIdState,
  commentContentState,
  isModifyingCommentState,
  isModifyingReviewState,
  tourItemIdState,
  contentTypeIdState,
} from '@recoil/review';
import { Navigate, useNavigate } from 'react-router-dom';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const rating = useRecoilValue(ratingState);
  const keywords = useRecoilValue(keywordsState);
  const content = useRecoilValue(contentState);
  const title = useRecoilValue(titleState);
  const targetReviewId = useRecoilValue(targetReviewIdState);
  const reviewData = useRecoilValue(reviewDataState);
  const targetCommentId = useRecoilValue(targetCommentIdState);
  const commentContent = useRecoilValue(commentContentState);
  const tourItemId = useRecoilValue(tourItemIdState);
  const contentTypeId = useRecoilValue(contentTypeIdState);
  const setIsModifyingReview = useSetRecoilState(isModifyingReviewState);
  const setIsModifyingComment = useSetRecoilState(isModifyingCommentState);
  const navigate = useNavigate();

  const customStyles = {
    content: {
      top: 'auto',
      left: '50%',
      right: 'auto',
      bottom: '0',
      marginRight: '-50%',
      transform: 'translate(-50%, 0)',
      width: '375px',
      height: '186px',
      borderTopLeftRadius: '2rem',
      borderTopRightRadius: '2rem',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
  };

  const handleEdit = () => {
    if (title == '내 리뷰') {
      setIsModifyingReview(true);
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
      // putReview(reviewData, targetReviewId);
    } else if (title == '내 댓글') {
      setIsModifyingComment(true);
      // putComments(commentContent, targetCommentId);
    }
  };

  const handleDelete = () => {
    if (title == '내 리뷰') {
      deleteReview(targetReviewId);
    } else if (title == '내 댓글') {
      deleteComments(targetCommentId);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal">
      <div className="mt-2">
        <div className="text-md mb-4 font-bold">{title}</div>
        <div>
          <div className="flex h-[52px] cursor-pointer items-center gap-1">
            <PenIcon color="#888888" />
            <p className="text-gray7" onClick={handleEdit}>
              수정하기
            </p>
          </div>
          <div className="flex h-[52px] cursor-pointer items-center gap-1">
            <DeleteIcon color="#888888" />
            <p className="text-gray7" onClick={handleDelete}>
              삭제하기
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
