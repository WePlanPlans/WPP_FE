import { MoreIcon, UserIcon } from '@components/common/icons/Icons';
import {
  isModalOpenState,
  modalChildrenState,
  titleState,
} from '@recoil/modal';
import { commentState, targetCommentIdState } from '@recoil/review';
import { useRecoilState, useSetRecoilState } from 'recoil';
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
    <div className="border-b border-solid border-gray-300 py-[13px]">
      <div className=" flex items-center">
        <div className="mr-4">
          {!(
            authorProfileImageUrl === 'http://asiduheimage.jpg' ||
            authorProfileImageUrl === null
          ) ? (
            <img
              src={authorProfileImageUrl}
              alt="유저 프로필"
              className="h-[40px] w-[40px] rounded-full"
            />
          ) : (
            <div
              className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#EDEDED]`}>
              <UserIcon size={30} color="white" fill="white" />
            </div>
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
      <div className="ml-14 w-[275px] text-sm text-gray7">{content}</div>
    </div>
  );
};

export default CommentItem;
