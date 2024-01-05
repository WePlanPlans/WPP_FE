import { KeyboardEvent, ChangeEvent, useState } from 'react';
import { postComments } from '@api/comments';
import { useParams } from 'react-router-dom';

interface InputCommentProps {
  classNameName?: string;
}

export const InputComment: React.FC<InputCommentProps> = () => {
  const [comment, setComment] = useState('');
  const params = useParams();
  const reviewId = Number(params.id);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setComment(inputText);
  };

  const handleSubmit = () => {
    postComments(comment, reviewId);
    setComment('');
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <>
      <div className="flex flex h-[64px] w-full items-center justify-center  border border-solid border-[#EDEDED] ">
        <div className="ml-4 mr-4 flex h-[40px] w-full items-center  rounded-md border border-solid border-[#EDEDED]">
          <div className="pl-1 pr-0.5 text-sm font-bold text-[#29ddf6]">ㅣ</div>
          <div className="flex  w-full ">
            <input
              type="text"
              placeholder="댓글을 입력하세요"
              className=" w-full max-w-full text-sm placeholder-[#d7d7d7]  outline-none"
              onChange={handleTextChange}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="ml-auto mr-1 min-w-[2rem] ">
            <button
              onClick={handleSubmit}
              className=" text-sm font-bold text-[#29ddf6]">
              등록
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
