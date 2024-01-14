import * as Progress from '@radix-ui/react-progress';
import { useEffect, useState } from 'react';

const TripBudget = () => {
  const [targetBudget, setTargetBudget] = useState(10000); // 예시 목표 경비
  const [currentSpending, setCurrentSpending] = useState(0); // 초기 사용 경비

  // 프로그레스 바 값 계산
  const progress = (currentSpending / targetBudget) * 100;

  useEffect(() => {
    // 경비 수정 모달 추가 예정
    const timer = setTimeout(() => setCurrentSpending(3000), 300);
    return () => clearTimeout(timer);
  }, []);

  // 목표 경비 설정 함수
  const handleSetTargetBudget = (newTargetBudget: number) => {
    setTargetBudget(newTargetBudget);
  };

  return (
    <div className="my-4">
      <div className="caption1 mb-[2px]">사용 경비</div>
      <div className="flex items-center">
        <span className="title2 mr-[2px]">
          {currentSpending.toLocaleString()}
        </span>
        <span className="body1">원</span>
      </div>

      <Progress.Root
        className="relative my-2 h-[25px] w-full overflow-hidden rounded-[8px] border border-solid border-gray2"
        style={{
          transform: 'translateZ(0)',
        }}
        value={progress}>
        <Progress.Indicator
          className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-gray3 transition-transform duration-[660ms]"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>

      <div className="caption2 flex items-center justify-between pt-1">
        <div className="">
          <span className="mr-[4px]">목표 경비</span>
          <button
            onClick={() => handleSetTargetBudget(20000)}
            className="text-gray3">
            설정
          </button>
        </div>
        <div>
          <span>{targetBudget.toLocaleString()}</span>
          <span>원</span>
        </div>
      </div>
    </div>
  );
};

export default TripBudget;
