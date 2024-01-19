import { MoreIcon } from '@components/common/icons/Icons';
import {
  isModalOpenState,
  titleState,
  modalChildrenState,
} from '@recoil/modal';
import { commentState, targetCommentIdState } from '@recoil/review';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ReactComponent as NullUser } from '@assets/images/NullUser.svg';

interface ItemProps {
  commentId: number;
  authorNickname: string;
  authorProfileImageUrl: string;
  createdTime: any;
  content: string;
  onClick?: () => void;
  isAuthor: boolean;
}

const CommentItem: React.FC<ItemProps> = (props: ItemProps) => {
  const {
    commentId,
    authorNickname,
    authorProfileImageUrl,
    createdTime,
    content,
    isAuthor,
    // onClick,
  } = props;
  const [_, setIsModalOpen] = useRecoilState(isModalOpenState);
  const setTitle = useSetRecoilState(titleState);
  const setTargetCommentId = useSetRecoilState(targetCommentIdState);
  const setComment = useSetRecoilState(commentState);
  const setModalChildren = useSetRecoilState(modalChildrenState);

  const openModal = (title: string, commentId: number) => {
    setTitle(title);
    setTargetCommentId(commentId);
    setComment(content);
    setModalChildren('EditDelete');

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
      <div className=" flex items-center">
        <div className="mr-4">
          {!(
            authorProfileImageUrl === 'http://asiduheimage.jpg' ||
            authorProfileImageUrl === null
          ) ? (
            <img
              src={authorProfileImageUrl}
              alt="유저 프로필"
              className="h-[60px] w-[60px] rounded-full"
            />
          ) : (
            <NullUser />
          )}
        </div>
        <div className=" flex flex-col justify-center gap-1">
          <div className="text-sm font-bold">{authorNickname}</div>
          <div className="text-sm text-gray4">
            {formatCreatedTime(createdTime)}
          </div>
        </div>
        {isAuthor && (
          <div
            className="ml-auto cursor-pointer"
            onClick={() => openModal('내 댓글', commentId)}>
            <MoreIcon fill="#888888" color="none" />
          </div>
        )}
      </div>
      <div className="ml-16 w-[275px] pl-3 text-sm text-gray7">{content}</div>
    </div>
  );
};

export default CommentItem;
