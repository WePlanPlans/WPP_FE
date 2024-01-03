import { MoreIcon } from '@components/common/icons/Icons';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { isModalOpenState, titleState } from '@recoil/modal';
import {
  commentState,
  targetCommentIdState,
  isModifyingCommentState,
} from '@recoil/review';
import { ChangeEvent } from 'react';
import { putComments } from '@api/comments';

interface ItemProps {
  commentId: number;
  authorNickname: string;
  authorProfileImageUrl: string;
  createdTime: any;
  content: string;
  onClick?: () => void;
}

const CommentItem: React.FC<ItemProps> = (props: ItemProps) => {
  const {
    commentId,
    authorNickname,
    authorProfileImageUrl,
    createdTime,
    content,
    onClick,
  } = props;
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);
  const setTitle = useSetRecoilState(titleState);
  const [targetCommentId, setTargetCommentId] =
    useRecoilState(targetCommentIdState);
  const [comment, setComment] = useRecoilState(commentState);
  const [isModifyingComment, setIsModifyingComment] = useRecoilState(
    isModifyingCommentState,
  );

  const openModal = (title: string, commentId: number) => {
    setTitle(title);
    setTargetCommentId(commentId);
    setComment(content);
    setIsModalOpen(true);
  };

  const formatCreatedTime = (timeString: string): string => {
    const date = new Date(timeString);
    const formattedDate = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);

    return formattedDate;
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setComment(inputText);
  };

  const cancleCommentEdit = () => {
    setIsModifyingComment(false);
  };
  const handeCommentEdit = () => {
    putComments(comment, targetCommentId);
    setIsModifyingComment(false);
  };

  return (
    <div className="mb-4 border-t border-solid border-gray-300 pt-4">
      <div className=" mb-2 flex items-center">
        {/* {authorProfileImageUrl} */}
        <div className="mr-2">
          <img
            src={
              'https://img.freepik.com/free-photo/portrait-of-a-cute-little-girl-in-a-blue-hat-3d-rendering_1142-38897.jpg?w=740&t=st=1704099517~exp=1704100117~hmac=49bf38020d3b7a61618f4db96fa5fdfa20a7c263be7f73b9987054b12f9d5027'
            }
            alt="유저 프로필"
            className="w-10 rounded-full"
          />
        </div>
        <div className=" flex flex-col justify-center gap-1">
          <div className="text-sm font-bold">{authorNickname}</div>
          <div className="text-xs text-gray4">
            {formatCreatedTime(createdTime)}
          </div>
        </div>
        <div
          className="ml-auto cursor-pointer"
          onClick={() => openModal('내 댓글', commentId)}>
          <MoreIcon fill="#888888" color="none" />
        </div>
      </div>
      {isModifyingComment && commentId == targetCommentId && (
        <div className="flex items-center">
          <input
            className="ml-11 mr-2 rounded-sm  border border-solid border-[#29ddf6] px-1 py-0.5 text-sm outline-none"
            onChange={handleTextChange}
            value={comment}
          />
          <div className="ml-auto mr-2 flex items-center gap-2">
            <button
              onClick={cancleCommentEdit}
              className=" rounded-sm border border-solid border-gray4 px-1 py-0.5 text-sm font-bold">
              취소
            </button>
            <button
              onClick={handeCommentEdit}
              className="rounded-sm border border-solid border-gray4 bg-[#29ddf6] px-1 py-0.5 text-sm font-bold text-white">
              완료
            </button>
          </div>
        </div>
      )}
      {!isModifyingComment && (
        <div className="mb-4 ml-11 w-60 text-sm text-gray7">{content}</div>
      )}
    </div>
  );
};

export default CommentItem;
