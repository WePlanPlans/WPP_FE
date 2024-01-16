import React, { useState, useEffect } from 'react';
import { getTripsSurvey } from '@api/trips';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { MoreIcon } from '@components/common/icons/Icons';
import { RightIcon } from '@components/common/icons/Icons';
import {
  calculatePercentage,
  calculatePercentageRemain,
} from '@utils/calculatePercentage';

interface RatioBarParams {
  value: number;
  total: number;
  color: string;
  label1: string;
  label2: string;
}

interface PercentageParams {
  value: number;
  total: number;
  color: string;
}

const TripPreferenceButton: React.FC = () => {
  return (
    <button className="mb-[17.5px] mt-[20px] flex w-[335px] items-center rounded-full bg-white px-6 py-4 text-sm">
      <div className="text-gray6">내 여행 취향 설정하러 가기</div>
      <div className="ml-auto">
        <RightIcon fill="#5E5E5E" />
      </div>
    </button>
  );
};

const RatioBar = ({ value, total, color, label1, label2 }: RatioBarParams) => {
  const width =
    value >= total - value
      ? Math.round((175 * value) / total)
      : Math.round((175 * (total - value)) / total);
  return (
    <div className="mb-1 flex items-center text-sm">
      {value >= total - value ? (
        <>
          <div className={`w-[65px] font-bold text-${color}`}>{label1}</div>
          <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
            <div style={{ width }} className={`rounded-full bg-${color}`}></div>
          </div>
          <div className="ml-auto text-gray6">{label2}</div>
        </>
      ) : (
        <>
          <div className={`w-[65px] text-gray6`}>{label1}</div>
          <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
            <div
              style={{ width }}
              className={`ml-auto rounded-full bg-${color}`}></div>
          </div>
          <div className={`text-${color} ml-auto font-bold`}>{label2}</div>
        </>
      )}
    </div>
  );
};

const Percentage = ({ value, total, color }: PercentageParams) => (
  <div className="flex justify-between text-gray6">
    {value >= total - value ? (
      <>
        <div className={`font-bold text-${color}`}>
          {calculatePercentage(value, total)}%
        </div>
        <div className="text-gray6">
          {calculatePercentageRemain(value, total)}%
        </div>
      </>
    ) : (
      <>
        <div className="text-gray6">{calculatePercentage(value, total)}%</div>
        <div className={`font-bold text-${color}`}>
          {calculatePercentageRemain(value, total)}%
        </div>
      </>
    )}
  </div>
);

const TripPreference: React.FC = () => {
  const params = useParams();
  const tripId = Number(params.id);
  const [A, setA] = useState<[number, number]>([0, 0]);
  const [B, setB] = useState<[number, number]>([0, 0]);
  const [C, setC] = useState<[number, number]>([0, 0]);
  const [D, setD] = useState<[number, number]>([0, 0]);
  const [E, setE] = useState<[number, number]>([0, 0]);

  const { data: tripPreference, isLoading } = useQuery({
    queryKey: ['tripPreference', tripId],
    queryFn: () => getTripsSurvey(tripId),
  });

  useEffect(() => {
    if (tripPreference) {
      setA([
        tripPreference?.data?.data?.planningCount,
        tripPreference?.data?.data?.planningTotalCount,
      ]);
      setB([
        tripPreference?.data?.data?.activeHoursCount,
        tripPreference?.data?.data?.activeHoursTotalCount,
      ]);
      setC([
        tripPreference?.data?.data?.accommodationCount,
        tripPreference?.data?.data?.accommodationTotalCount,
      ]);
      setD([
        tripPreference?.data?.data?.foodCount,
        tripPreference?.data?.data?.foodTotalCount,
      ]);
      setE([
        tripPreference?.data?.data?.tripStyleCount,
        tripPreference?.data?.data?.tripStyleTotalCount,
      ]);
    }
  }, [tripPreference]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" mb-[-20px] ml-[-20px] mr-[-20px] mt-[-20px] flex flex-col items-center bg-gray1  ">
      <TripPreferenceButton />
      <div className="mb-[20px] ml-auto mr-[40px] flex items-center text-sm ">
        <div>n명 참여</div>
        <div className="mt-0.5">
          <MoreIcon size={20} color="none" fill="#888888" />
        </div>
      </div>
      {tripPreference?.data?.data && (
        <div>
          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">계획성</div>
            <RatioBar
              value={A[0]}
              total={A[1]}
              color="sub2"
              label1="철저하게"
              label2="여유롭게"
            />
            <Percentage value={A[0]} total={A[1]} color="sub2" />
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">활동시간</div>
            <RatioBar
              value={B[0]}
              total={B[1]}
              color="main2"
              label1="아침형"
              label2="저녁형"
            />
            <Percentage value={B[0]} total={B[1]} color="main2" />
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">숙소</div>
            <RatioBar
              value={C[0]}
              total={C[1]}
              color="purple"
              label1="분위기"
              label2="가격"
            />
            <Percentage value={C[0]} total={C[1]} color="purple" />
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">음식</div>
            <RatioBar
              value={D[0]}
              total={D[1]}
              color="orange"
              label1="노포"
              label2="인테리어"
            />
            <Percentage value={D[0]} total={D[1]} color="orange" />
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">관광지</div>
            <RatioBar
              value={E[0]}
              total={E[1]}
              color="green"
              label1="액티비티"
              label2="휴양"
            />
            <Percentage value={E[0]} total={E[1]} color="green" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPreference;
