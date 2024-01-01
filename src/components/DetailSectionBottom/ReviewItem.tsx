import { useEffect } from 'react';
import { StarIcon, ChatIcon } from '@components/common/icons/Icons';

interface Keyword {
  keywordId: number;
  content: string;
  type: string;
}

interface ItemProps {
  authorNickname: string;
  authorProfileImageUrl: string;
  rating: number;
  createdTime: any;
  content: string;
  keywords: Keyword[]; // keywordId, content, type
  commentCount: number;
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const {
    authorNickname,
    authorProfileImageUrl,
    rating,
    createdTime,
    content,
    keywords,
    commentCount,
  } = props;

  const formatCreatedTime = (timeString: string): string => {
    const date = new Date(timeString);
    const formattedDate = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);

    return formattedDate;
  };
  useEffect(() => {
    console.log('commentCount', commentCount);
  }, []);
  return (
    <div className="mb-4">
      <div className=" mb-2 flex items-center">
        {/* {authorProfileImageUrl} */}
        <div className="mr-2">
          <img
            src={
              'https://img.freepik.com/free-photo/portrait-of-a-cute-little-girl-in-a-blue-hat-3d-rendering_1142-38897.jpg?w=740&t=st=1704099517~exp=1704100117~hmac=49bf38020d3b7a61618f4db96fa5fdfa20a7c263be7f73b9987054b12f9d5027'
            }
            alt="유저 프로필"
            className="w-12 rounded-full"
          />
        </div>
        <div className=" mr-2 flex flex-col gap-1">
          <div className="font-bold">{authorNickname}</div>
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon
                key={index}
                size={20}
                color="none"
                fill={index < rating ? '#FFEC3E' : '#EDEDED'}
              />
            ))}
          </div>
        </div>
        <div className="mb-0.5 mt-auto text-sm text-gray3">
          {formatCreatedTime(createdTime)}
        </div>
      </div>
      <div className=" mb-2 text-gray7">{content}</div>
      <div className="flex">
        <div className="flex">
          {keywords.map((keyword, idx) => {
            return (
              <div
                key={idx}
                className="rounded-md bg-gray-100 px-2 py-1 text-sm">
                {keyword.content}
              </div>
            );
          })}
        </div>
        <div className="ml-auto flex items-center justify-between">
          <ChatIcon size={20} />
          <div className="ml-1">{commentCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
