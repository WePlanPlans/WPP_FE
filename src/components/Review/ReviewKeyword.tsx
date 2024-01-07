import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getReviewKeywords } from '@api/review';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { keywordsState } from '@recoil/review';

interface Keyword {
  keywordId: number;
  content: string;
}

export default function ReviewKeyword() {
  const location = useLocation();
  const { state } = location;
  const { contentTypeId } = state;
  const [keywordType, setKeywordType] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useRecoilState(keywordsState);

  useEffect(() => {
    if (contentTypeId === 12) {
      setKeywordType('ATTRACTION ');
    } else if (contentTypeId === 32) {
      setKeywordType('ACCOMMODATION');
    } else if (contentTypeId === 39) {
      setKeywordType('DINING ');
    }
  }, [contentTypeId]);

  const { data: reviewKeywords } = useQuery({
    queryKey: ['reviewKeywords', keywordType],
    queryFn: () => getReviewKeywords(keywordType),
  });

  const handleKeywordClick = (keyword: Keyword) => {
    const isAlreadySelected = selectedKeywords.some(
      (selectedKeyword) => selectedKeyword.keywordId === keyword.keywordId,
    );
    if (isAlreadySelected) {
      setSelectedKeywords((prevSelectedKeywords) =>
        prevSelectedKeywords.filter(
          (selectedKeyword) => selectedKeyword.keywordId !== keyword.keywordId,
        ),
      );
    } else {
      setSelectedKeywords((prevSelectedKeywords) => [
        ...prevSelectedKeywords,
        { keywordId: keyword.keywordId, content: keyword.content },
      ]);
    }
  };

  // 5x2 형태로 배치하기 위해 행(row)과 열(column)을 계산
  // const rows = 5;
  const columns = 2;

  return (
    <>
      <div className="mb-5 text-lg font-bold">어떤 점이 좋았나요? </div>
      <div className="mb-10 grid grid-cols-2 gap-2 font-bold">
        {reviewKeywords?.data?.data?.keywords?.map(
          (keyword: any, index: number) => {
            const row = Math.floor(index / columns) + 1;
            const col = (index % columns) + 1;

            const isSelected = selectedKeywords.some(
              (selectedKeyword) =>
                selectedKeyword.keywordId === keyword.keywordId,
            );

            return (
              <button
                className={`flex items-center justify-center row-${row} col-${col} h-[40px] cursor-pointer rounded-md ${
                  isSelected
                    ? 'bg-[#062139] text-white'
                    : 'bg-gray-100 text-gray-500'
                } px-2 py-1`}
                key={keyword.keywordId}
                onClick={() => handleKeywordClick(keyword)}>
                {keyword.content}
              </button>
            );
          },
        )}
      </div>
    </>
  );
}
