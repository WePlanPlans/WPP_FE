import Alert from '@components/common/alert/Alert';
import { SettingIcons } from '@components/common/icons/Icons';
import { socketContext } from '@hooks/useSocket';
import * as Progress from '@radix-ui/react-progress';
import { useContext, useEffect, useState } from 'react';

const TripBudget = () => {
  const { tripBudget } = useContext(socketContext);
  const budget = tripBudget?.data;

  const [targetBudget, setTargetBudget] = useState(0); // 예시 목표 경비
  const [currentSpending, setCurrentSpending] = useState(0); // 초기 사용 경비

  useEffect(() => {
    if (budget) {
      setTargetBudget(budget.budget || 0);
      setCurrentSpending(
        budget.calculatedPrice >= 0 ? budget.calculatedPrice : 0,
      );
    }
  }, [budget]);

  // 프로그레스 바 값 계산
  const progress = Math.min(
    currentSpending && targetBudget
      ? (currentSpending / targetBudget) * 100
      : 0,
    100,
  );

  // // 목표 경비 설정 함수
  // const handleSetTargetBudget = (newTargetBudget: number) => {
  //   setTargetBudget(newTargetBudget);
  // };

  return (
    <>
      <div className="my-4">
        <div className="caption1 mb-[2px]">사용 경비</div>
        <div className="flex items-center">
          <span className="title2 mr-[2px]">
            {currentSpending.toLocaleString()}
          </span>
          <span className="body1">원</span>
        </div>

        <Progress.Root
          className="relative my-2 h-[16px] w-full overflow-hidden rounded-[8px] border border-solid border-gray2"
          style={{
            transform: 'translateZ(0)',
          }}
          value={progress}>
          <Progress.Indicator
            className={`ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full ${
              progress >= 100 ? 'bg-sub2' : 'bg-main2'
            } transition-transform duration-[660ms]`}
            style={{
              transform: `translateX(${
                progress >= 100 ? 0 : -100 + progress
              }%)`,
            }}
          />
        </Progress.Root>

        <div className="caption2 flex items-center justify-between pt-1">
          <div className="flex items-center">
            <span className="body5 mr-[4px] text-gray5">목표 경비</span>
            <Alert
              title={'비용을 입력해주세요'}
              message={''}
              onConfirm={() => {
                console.log('확인');
              }}
              onCancel={() => {
                console.log('취소');
              }}
              children={
                <button className="text-gray3">
                  <SettingIcons color="#D9D9D9" />
                </button>
              }
              content={
                <div className="mb-6 mt-8 flex w-[80%] items-center justify-between border-b-[1px] border-solid border-gray4">
                  <input
                    type="text"
                    className="title3 text-gray6 placeholder:text-gray4 focus:outline-none"
                    placeholder="금액"
                  />
                  <span className="title3 text-gray4">원</span>
                </div>
              }
            />
          </div>
          <div>
            <span>{targetBudget.toLocaleString()}</span>
            <span>원</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripBudget;
