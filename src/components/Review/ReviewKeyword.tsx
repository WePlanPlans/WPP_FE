import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getReviewKeywords } from '@api/review';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { keywordsState } from '@recoil/review';

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

  return (
    <>
      <div className="mb-5 text-lg font-bold">어떤 점이 좋았나요? </div>
      <div className="mb-10  flex  flex-wrap gap-2 text-[14px] font-bold">
        {reviewKeywords?.data?.data?.keywords?.map((keyword: Keyword) => {
          const isSelected = selectedKeywords.some(
            (selectedKeyword) =>
              selectedKeyword.keywordId === keyword.keywordId,
          );

          return (
            <button
              className={`h-[40px] cursor-pointer items-center justify-center rounded-[30px] ${
                isSelected
                  ? 'bg-[#062139] text-white'
                  : 'bg-gray-100 text-gray-500'
              } px-[14px] py-[8px]`}
              key={keyword.keywordId}
              onClick={() => handleKeywordClick(keyword)}>
              {keyword.content}
            </button>
          );
        })}
      </div>
    </>
  );
}
