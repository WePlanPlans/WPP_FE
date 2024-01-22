import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useSetRecoilState } from 'recoil';
import { reviewCountState } from '@recoil/review';

interface ReviewData {
  ratingAverage: number;
  reviewTotalCount: number;
}

interface DetailToursRatingProps {
  reviewData: ReviewData;
}

export default function DetailToursRating({
  reviewData,
}: DetailToursRatingProps) {
  const { reviewTotalCount, ratingAverage } = reviewData;
  const setReviewCount = useSetRecoilState(reviewCountState);

  const STAR_IDX_ARR = ['1', '2', '3', '4', '5'];
  const [ratedStarArr, setRatedStarArr] = useState([0, 0, 0, 0, 0]);

  const calculateRates = (average: number) => {
    let tempRatedStarArr = [0, 0, 0, 0, 0];
    let exchangedStarScore = (average * 80) / 5;
    let idx = 0;
    while (exchangedStarScore > 16) {
      tempRatedStarArr[idx] = 16;
      idx += 1;
      exchangedStarScore -= 16;
    }
    tempRatedStarArr[idx] = Number(exchangedStarScore.toFixed(1));
    return tempRatedStarArr;
  };

  useEffect(() => {
    setRatedStarArr(calculateRates(ratingAverage));
    setReviewCount(reviewTotalCount);
  }, []);

  return (
    <Link to="scrollToReview" spy={true} smooth={true}>
      <div className="flex w-full cursor-pointer items-center">
        {STAR_IDX_ARR.map((item, idx) => {
          return (
            <span key={`${item}+${idx}`}>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="#EDEDED"
                xmlns="http://www.w3.org/2000/svg">
                <clipPath id={`${item}StarClip`}>
                  <rect width={`${ratedStarArr[idx]}`} height="15" />
                </clipPath>
                <path
                  id={`${item}star`}
                  d="M7.46447 0.974901C7.76382 0.0535908 9.06723 0.0535913 9.36658 0.974902L10.4362 4.2667C10.57 4.67872 10.954 4.95768 11.3872 4.95768H14.8484C15.8171 4.95768 16.2199 6.1973 15.4362 6.7667L12.636 8.80114C12.2855 9.05578 12.1389 9.50715 12.2728 9.91917L13.3423 13.211C13.6417 14.1323 12.5872 14.8984 11.8035 14.329L9.00331 12.2946C8.65283 12.0399 8.17823 12.0399 7.82774 12.2946L5.02757 14.329C4.24386 14.8984 3.18938 14.1323 3.48873 13.211L4.5583 9.91917C4.69217 9.50715 4.54552 9.05578 4.19503 8.80114L1.39486 6.7667C0.611146 6.1973 1.01392 4.95768 1.98265 4.95768H5.44385C5.87707 4.95768 6.26103 4.67872 6.3949 4.2667L7.46447 0.974901Z"
                />
                <use
                  clipPath={`url(#${item}StarClip)`}
                  href={`#${item}star`}
                  fill="#FFEC3E"
                />
              </svg>
            </span>
          );
        })}
        <div className="h-3 pl-1">
          <p className="text-xs font-normal leading-4 text-gray4 ">
            ({reviewTotalCount})
          </p>
        </div>
      </div>
    </Link>
  );
}
