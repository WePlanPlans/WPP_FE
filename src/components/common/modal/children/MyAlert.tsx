import { deleteReview } from '@api/review';
import { ButtonPrimary, ButtonWhite } from '@components/common/button/Button';
import { isModalOpenState } from '@recoil/modal';
import {
  toastPopUpState,
  targetReviewIdState,
  tourItemIdState,
  commentState,
  targetCommentIdState,
} from '@recoil/review';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteComments } from '@api/comments';

interface MyAlertProps {
  title: string;
  content: string;
}
const MyAlert: React.FC<MyAlertProps> = ({ title, content }) => {
  const navigate = useNavigate();
  const tourItemId = useRecoilValue(tourItemIdState);
  const targetReviewId = useRecoilValue(targetReviewIdState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setToastPopUp = useSetRecoilState(toastPopUpState);
  const queryClient = useQueryClient();
  const setComment = useSetRecoilState(commentState);
  const targetCommentId = useRecoilValue(targetCommentIdState);

  const { mutate: deleteReviewMutate } = useMutation({
    mutationFn: (targetReviewId: number) => deleteReview(targetReviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['toursReviews'],
      });
      queryClient.invalidateQueries({
        queryKey: ['myReviews'],
      });
    },
    onError: () => console.log('error'),
  });

  const { mutate: deleteCommentMutate } = useMutation({
    mutationFn: (targetCommentId: number) => deleteComments(targetCommentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviewComments'] });
    },
    onError: () => console.log('error'),
  });

  const handleClickButton = async () => {
    if (title == '리뷰 삭제') {
      await deleteReviewMutate(targetReviewId);
      setIsModalOpen(false);
      setToastPopUp(() => ({
        isPopUp: true,
        noun: '리뷰',
        verb: '삭제',
      }));
      if (location.pathname.includes('/reviewComment')) {
        if (tourItemId == 0) {
          navigate('/myPageReview');
        } else {
          navigate(`/detail/${tourItemId}`);
        }
      }
    } else if (title == '댓글 삭제') {
      await deleteCommentMutate(targetCommentId);
      setIsModalOpen(false);
      setComment('');
      setToastPopUp(() => ({
        isPopUp: true,
        noun: '댓글',
        verb: '삭제',
      }));
    } else if (title == '로그인') {
      setComment('');
      setIsModalOpen(false);
      navigate(`/login`);
    }
  };

  const closeModal = () => {
    setComment('');
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="mt-4 flex justify-center font-bold">{title}</div>
      <div className="mb-4 flex flex-col justify-center text-sm text-[#888888]">
        {content.split(/(?<=\.) /).map((sentence, index) => (
          <div key={index} className="flex justify-center">
            {sentence}
          </div>
        ))}
      </div>
      <div className="flex gap-3 ">
        <ButtonWhite onClick={closeModal} className="text-sm">
          취소
        </ButtonWhite>
        <ButtonPrimary onClick={handleClickButton} className="text-sm">
          확인
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default MyAlert;
