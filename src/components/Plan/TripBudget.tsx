import { pubUpdateBudget } from '@api/socket';
import Alert from '@components/common/alert/Alert';
import { CloseIcon, SettingIcons } from '@components/common/icons/Icons';
import { useGetTripsAuthority } from '@hooks/useGetTripsAuthority';
import { socketContext } from '@hooks/useSocket';
import * as Progress from '@radix-ui/react-progress';
import { useContext, useState } from 'react';

const TripBudget = () => {
  const { tripAuthority } = useGetTripsAuthority();
  const { tripBudget, tripId } = useContext(socketContext);

  const budget = tripBudget?.data;

  // 프로그레스 바 값 계산
  const progress = Math.min(
    budget?.calculatedPrice && budget.budget
      ? (budget.calculatedPrice / budget.budget) * 100
      : 0,
    100,
  );

  const [inputBudget, setInputBudget] = useState('');

  const showCloseIcon = inputBudget;

  // 목표 경비 설정 함수
  const handleSetTargetBudget = (inputBudget: string) => {
    const newTargetBudget = parseInt(inputBudget, 10); // 문자열 숫자로 변환
    if (!isNaN(newTargetBudget) && newTargetBudget !== budget?.budget) {
      pubUpdateBudget(
        {
          budget: newTargetBudget,
        },
        tripId || '',
      );
      setInputBudget('');
    }
  };

  return (
    <>
      <div className={`${!budget?.budget ? 'pb-[55px]' : 'pb-[25px]'} my-4}`}>
        <div className="caption1 mb-[2px]">사용 경비</div>
        <div className="flex items-center">
          <span className="title2 mr-[2px]">
            {budget?.calculatedPrice.toLocaleString() ?? '-'}
          </span>
          <span className="body1">원</span>
        </div>

        <Progress.Root
          className="relative my-2 h-[8px] w-full overflow-hidden rounded-[8px] border border-solid border-gray2"
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
            {tripAuthority == 'WRITE' && (
              <Alert
                title={'비용을 입력해주세요'}
                message={''}
                onConfirm={() => handleSetTargetBudget(inputBudget)}
                closeOnConfirm={true}
                children={
                  <button className="text-gray3">
                    <SettingIcons color="#D9D9D9" />
                    {!budget?.budget && (
                      <div className="h-[31.2px] w-[141px]">
                        <div className="h-[27.16px] w-[141px]">
                          <div className="relative left-[-80px] top-8 flex h-[27.16px] w-[141px] items-center justify-center gap-[0.8043220639228821px] rounded-lg bg-[#062139] px-3 py-[7px]">
                            <div className="h-3.5 w-[129.36px]">
                              <span className="caption1 w-[129.36px] text-center text-white">
                                목표 경비를 입력해보세요!
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          width={12}
                          height={7}
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative left-[-15.8px] top-0"
                          preserveAspectRatio="xMidYMid meet">
                          <path
                            d="M5.94048 0.136719L11.4521 6.20375L0.428827 6.20375L5.94048 0.136719Z"
                            fill="#062139"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                }
                content={
                  <div className="mb-6 mt-8 flex w-[80%] items-center justify-between border-b-[1px] border-solid border-gray4">
                    <div className="flex w-full items-center justify-between">
                      <input
                        type="number"
                        className="title3 text-gray6 placeholder:text-gray4 focus:outline-none"
                        placeholder="금액"
                        value={inputBudget}
                        onChange={(e) => setInputBudget(e.target.value)}
                      />
                      <div
                        className="cursor-pointer"
                        onClick={() => setInputBudget('')}>
                        {showCloseIcon && (
                          <CloseIcon size={16} fill="#D7D7D7" />
                        )}
                      </div>
                    </div>

                    <span className="title3 pl-[4.5px] text-gray4">원</span>
                  </div>
                }
              />
            )}
          </div>
          <div>
            <span>{budget?.budget.toLocaleString() ?? '- '}</span>
            <span>원</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripBudget;
