import { ChangeEvent } from 'react';
import { contentState } from '@recoil/review';
import { useRecoilState } from 'recoil';

export default function ReviewPosting() {
  const [content, setContent] = useRecoilState(contentState);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    if (inputText.length <= 400) {
      setContent(inputText);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="mb-5 text-lg font-bold">리뷰를 작성해주세요</div>
      <div className="mb-1 ">
        <textarea
          className="h-[152px] w-full rounded-md border p-2 text-sm placeholder-gray3 "
          placeholder="직접 경험한 솔직한 리뷰를 남겨주세요"
          onChange={handleTextChange}
          value={content}
        />
      </div>
      <div className="mb-2 ml-auto text-sm">
        {content.length} <span className="text-gray4">/ 400</span>
      </div>
    </div>
  );
}
