import { getReviewComments } from '@api/review';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import CommentItem from './CommentItem';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { isModalOpenState, titleState } from '@recoil/modal';
import { Modal } from '@components/common/modal';

export default function ReviewComments() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const setTitle = useSetRecoilState(titleState);

  const { data: reviewComments } = useQuery({
    queryKey: ['reviewComments'],
    queryFn: () => getReviewComments(Number(id)),
  });

  const openModal = (title: string) => {
    setTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mb-4 text-xs">
        댓글
        <span className="pl-0.5 font-bold">
          {reviewComments?.data?.data?.comments?.length}
        </span>
      </div>
      {reviewComments?.data?.data?.comments?.map((comment: any) => {
        return (
          <CommentItem
            key={comment.commentId}
            authorNickname={comment.authorNickname}
            authorProfileImageUrl={comment.authorProfileImageUrl}
            createdTime={comment.createdTime}
            content={comment.content}
            onClick={() => openModal('내 댓글')}
          />
        );
      })}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
