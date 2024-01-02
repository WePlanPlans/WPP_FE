import { ReactNode } from 'react';
interface InputCommentProps {
  onClick?: () => void;
  children?: ReactNode;
  classNameName?: string;
}

export const InputComment: React.FC<InputCommentProps> = ({ onClick }) => {
  return (
    <>
      <div className="bottom-4 flex rounded-md border border-solid border-[#d7d7d7] px-2 py-1">
        <div className="mr-1 text-sm font-bold text-[#29ddf6]">|</div>
        <div className="flex  w-full">
          <input
            type="text"
            placeholder="댓글을 입력하세요"
            className=" w-full max-w-full text-sm placeholder-[#d7d7d7]  outline-none"
          />
        </div>
        <div className="ml-auto min-w-[2rem] ">
          <button
            onClick={onClick}
            className=" text-sm font-bold text-[#29ddf6]">
            등록
          </button>
        </div>
      </div>
    </>
  );
};
