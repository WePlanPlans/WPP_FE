import { useGetToursReviews } from '@hooks/useReviewStats';
import { v4 as uuidv4 } from 'uuid';

const DetailReviewStats = () => {
  const { reviewStats } = useGetToursReviews();
  console.log(reviewStats);

  return (
    <>
      <div className="mb-2 mt-2 text-lg font-bold">이런 점이 좋았어요</div>
      {reviewStats &&
        reviewStats.map((data) => (
          <div key={uuidv4()} className="mb-2 h-10 w-full">
            <div className="relative h-10 w-[335px] rounded-lg bg-gray1">
              <div className="absolute top-0 h-10 w-[214px] rounded-lg bg-[#99f0d6]" />
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
    </>
  );
};

export default DetailReviewStats;
