import { KeyboardEvent, ChangeEvent } from 'react';
import { postComments } from '@api/comments';
import { useParams } from 'react-router-dom';
import { commentState } from '@recoil/review';
import { useRecoilState, useRecoilValue } from 'recoil';
import { putComments } from '@api/comments';
import { isModifyingCommentState, targetCommentIdState } from '@recoil/review';

interface InputCommentProps {
  classNameName?: string;
}

export const InputComment: React.FC<InputCommentProps> = () => {
  const [comment, setComment] = useRecoilState(commentState);
  const params = useParams();
  const reviewId = Number(params.id);
  const [isModifyingComment, setIsModifyingComment] = useRecoilState(
    isModifyingCommentState,
  );
  const targetCommentId = useRecoilValue(targetCommentIdState);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setComment(inputText);
  };

  const handleSubmit = () => {
    if (isModifyingComment) {
      putComments(comment, targetCommentId);
      setIsModifyingComment(false);
    } else {
      postComments(comment, reviewId);
    }
    setComment('');
    window.location.reload();
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <>
      <div className="sticky bottom-0 mt-auto flex flex h-[64px] w-full items-center justify-center border  border-solid border-[#EDEDED] bg-white ">
        <div className="ml-4 mr-4 flex h-[40px] w-full items-center  rounded-md border border-solid border-[#EDEDED]">
          <div className="pl-1 pr-0.5 text-sm font-bold text-[#29ddf6]">ㅣ</div>
          <div className="flex  w-full ">
            <input
              type="text"
              placeholder="댓글을 입력하세요"
              className=" w-full max-w-full text-sm placeholder-[#d7d7d7]  outline-none"
              onChange={handleTextChange}
              value={isModifyingComment ? comment : ''}
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
