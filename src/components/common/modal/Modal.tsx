import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { DeleteIcon, PenIcon } from '@components/common/icons/Icons';
import { useRecoilValue } from 'recoil';
import { titleState } from '@recoil/modal';
import { deleteReview } from '@api/review';
import { targetReviewIdState } from '@recoil/review';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const title = useRecoilValue(titleState);
  const targetReviewId = useRecoilValue(targetReviewIdState);

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

  const handleEdit = () => {};

  const handleDelete = () => {
    deleteReview(targetReviewId);
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
