import { getReviewComments } from '@api/review';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import CommentItem from './CommentItem';
import { useRecoilState } from 'recoil';
import { isModalOpenState } from '@recoil/modal';
import { Modal } from '@components/common/modal';
// import { targetCommentIdState } from '@recoil/review';

export default function ReviewComments() {
  const params = useParams();
  const reviewId = Number(params.id);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  // const setTitle = useSetRecoilState(titleState);
  // const setTargetCommentId = useSetRecoilState(targetCommentIdState);

  const { data: reviewComments } = useQuery({
    queryKey: ['reviewComments'],
    queryFn: () => getReviewComments(reviewId),
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mb-4 text-xs">
        댓글
        <span className="pl-0.5 font-bold">
          {reviewComments?.data?.data?.comments?.totalElements}
        </span>
      </div>
      {reviewComments?.data?.data?.comments?.totalElements == 0 && (
        <div className="mb-4 flex flex-col items-center justify-center text-sm text-gray4">
          <div>댓글이 없습니다. </div>
          <div>첫 댓글을 작성해보세요!</div>
        </div>
      )}
      {reviewComments?.data?.data?.comments?.content?.map((item: any) => {
        return (
          <CommentItem
            key={item.commentId}
            commentId={item.commentId}
            authorNickname={item.authorNickname}
            authorProfileImageUrl={item.authorProfileImageUrl}
            createdTime={item.createdTime}
            content={item.content}
          />
        );
      })}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
