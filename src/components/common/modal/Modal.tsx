import React from 'react';
import Modal from 'react-modal';
import { DeleteIcon, PenIcon } from '@components/common/icons/Icons';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { titleState, isModalOpenState } from '@recoil/modal';
import { deleteReview } from '@api/review';
import { deleteComments } from '@api/comments';
import {
  ratingState,
  keywordsState,
  contentState,
  // commentState,
  targetReviewIdState,
  // reviewDataState,
  targetCommentIdState,
  // commentContentState,
  isModifyingCommentState,
  isModifyingReviewState,
  tourItemIdState,
  contentTypeIdState,
  shouldOptimisticState,
} from '@recoil/review';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const rating = useRecoilValue(ratingState);
  const keywords = useRecoilValue(keywordsState);
  const content = useRecoilValue(contentState);
  // const comment = useRecoilValue(commentState);
  const title = useRecoilValue(titleState);
  const targetReviewId = useRecoilValue(targetReviewIdState);
  // const reviewData = useRecoilValue(reviewDataState);
  const targetCommentId = useRecoilValue(targetCommentIdState);
  // const commentContent = useRecoilValue(commentContentState);
  const tourItemId = useRecoilValue(tourItemIdState);
  const contentTypeId = useRecoilValue(contentTypeIdState);
  const setIsModifyingReview = useSetRecoilState(isModifyingReviewState);
  const setIsModifyingComment = useSetRecoilState(isModifyingCommentState);
  const navigate = useNavigate();
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setShouldOptimistic = useSetRecoilState(shouldOptimisticState);

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
    }
  };

  const handleDelete = () => {
    if (title == '내 리뷰') {
      deleteReview(targetReviewId);
      setShouldOptimistic(true);
      setIsModalOpen(false);
      navigate(`/detail/${tourItemId}`);
    } else if (title == '내 댓글') {
      deleteComments(targetCommentId);
      setShouldOptimistic(true);
      setIsModalOpen(false);
    }
    window.location.reload();
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
