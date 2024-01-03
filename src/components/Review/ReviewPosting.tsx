import { useState, ChangeEvent } from 'react';

export default function ReviewPosting() {
  const [textLength, setTextLength] = useState(0);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    setTextLength(inputText.length);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-5 font-bold">리뷰를 작성해주세요</div>
      <div className="mb-1">
        <textarea
          className="h-32 w-full rounded-md border p-2 text-sm"
          placeholder="직접 경험한 솔직한 리뷰를 남겨주세요"
          onChange={handleTextChange}
        />
      </div>
      <div className="mb-3 ml-auto text-sm">
        {textLength} <span className="text-gray4">/ 400</span>
      </div>
    </div>
  );
}
