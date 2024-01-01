import { useState } from 'react';
import { useGetToursReviews } from '@hooks/useReviewStats';
import { v4 as uuidv4 } from 'uuid';
import { DownIcon } from '@components/common/icons/Icons';
import useReviewStatsCalculator from '@hooks/useReviewStatsCalculator';

const DetailReviewStats = () => {
  const { reviewStats } = useGetToursReviews();
  const [showAll, setShowAll] = useState(false);

  const { calculateWidth, getColor } = useReviewStatsCalculator(reviewStats);

  return (
    <>
      <div className="mb-2 mt-2 text-lg font-bold">이런 점이 좋았어요</div>
      {reviewStats &&
        reviewStats.slice(0, showAll ? reviewStats.length : 3).map((data) => (
          <div key={uuidv4()} className="mb-2 h-10 w-full">
            <div className="relative h-10 w-[335px] rounded-lg bg-gray1">
              <div
                className="absolute top-0 h-10 rounded-lg"
                style={{
                  width: `${calculateWidth(data.keywordCount)}%`,
                  backgroundColor: getColor(data.keywordCount),
                }}
              />
              <div className="absolute left-[14.5px] top-[12.23px] flex items-center justify-start gap-[108px]">
                <div className="flex items-start justify-start gap-1.5">
                  <p className=" w-4 ">😋</p>
                  <p className="h-[15.55px] w-[166px] font-bold text-gray6">
                    {data.content}
                  </p>
                </div>
                <p className=" font-bold text-gray5">{data.keywordCount}</p>
              </div>
            </div>
          </div>
        ))}

      <div className="flex items-center justify-center">
        <div onClick={() => setShowAll(!showAll)} className="cursor-pointer">
          <DownIcon />
        </div>
      </div>
    </>
  );
};

export default DetailReviewStats;
