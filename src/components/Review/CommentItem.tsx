import { MoreIcon } from '@components/common/icons/Icons';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { isModalOpenState, titleState } from '@recoil/modal';
import { commentState, targetCommentIdState } from '@recoil/review';

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
    // authorProfileImageUrl,
    createdTime,
    content,
    // onClick,
  } = props;
  const [_, setIsModalOpen] = useRecoilState(isModalOpenState);
  const setTitle = useSetRecoilState(titleState);
  const [targetCommentId, setTargetCommentId] =
    useRecoilState(targetCommentIdState);
  const [comment, setComment] = useRecoilState(commentState);

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
      <div className="mb-4 ml-11 w-60 text-sm text-gray7">{content}</div>
    </div>
  );
};

export default CommentItem;
