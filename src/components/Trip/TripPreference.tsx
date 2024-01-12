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
    <div className=" mb-[-20px] ml-[-40px] mr-[-40px] mt-[-20px] flex flex-col items-center bg-gray1  ">
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
            <div className="mb-1 flex items-center text-sm">
              {A[0] >= A[1] ? (
                <>
                  <div className="w-[65px] font-bold text-sub2">철저하게</div>
                  <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
                    <div
                      className={` w-[${
                        (A[0] / (A[0] + A[1])) * 175
                      }px] rounded-full bg-sub2`}></div>
                  </div>
                  <div className="ml-auto text-gray6">여유롭게</div>
                </>
              ) : (
                <>
                  <div className="w-[65px] text-gray6">철저하게</div>
                  <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
                    <div
                      className={`ml-auto w-[${
                        (A[1] / (A[0] + A[1])) * 175
                      }px] rounded-full bg-sub2`}></div>
                  </div>
                  <div className="ml-auto font-bold text-sub2">여유롭게</div>
                </>
              )}
            </div>
            <div className="flex justify-between text-gray6">
              {A[0] >= A[1] ? (
                <>
                  <div className="font-bold text-sub2">
                    {calculatePercentage(A[0], A[1])}%
                  </div>
                  <div className="text-gray6">
                    {calculatePercentageRemain(A[0], A[1])}%
                  </div>
                </>
              ) : (
                <>
                  <div className="text-gray6">
                    {calculatePercentage(A[0], A[1])}%
                  </div>
                  <div className="font-bold text-sub2">
                    {calculatePercentageRemain(A[0], A[1])}%
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">활동시간</div>
            <div className="mb-1 flex items-center text-sm">
              {B[0] >= B[1] ? (
                <>
                  <div className="w-[65px] font-bold text-main2">아침형</div>
                  <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
                    <div
                      className={` w-[${
                        (B[0] / (B[0] + B[1])) * 175
                      }px] rounded-full bg-main2`}></div>
                  </div>

                  <div className="ml-auto text-gray6">저녁형</div>
                </>
              ) : (
                <>
                  <div className="w-[65px] text-gray6">아침형</div>
                  <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
                    <div
                      className={`ml-auto w-[${
                        (B[1] / (B[0] + B[1])) * 175
                      }px] rounded-full bg-main2`}></div>
                  </div>
                  <div className="ml-auto font-bold text-main2">저녁형</div>
                </>
              )}
            </div>
            <div className="flex justify-between text-gray6">
              {B[0] >= B[1] ? (
                <>
                  <div className="font-bold text-main2">
                    {calculatePercentage(B[0], B[1])}%
                  </div>
                  <div className="text-gray6">
                    {calculatePercentageRemain(B[0], B[1])}%
                  </div>
                </>
              ) : (
                <>
                  <div className="text-gray6">
                    {calculatePercentage(B[0], B[1])}%
                  </div>
                  <div className="font-bold text-main2">
                    {calculatePercentageRemain(B[0], B[1])}%
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">숙소</div>
            <div className="mb-1 flex items-center text-sm">
              {C[0] >= C[1] ? (
                <>
                  <div className="text-purple w-[65px] font-bold">분위기</div>
                  <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
                    <div
                      className={` w-[${
                        (C[0] / (C[0] + C[1])) * 175
                      }px] bg-purple rounded-full`}></div>
                  </div>
                  <div className="ml-auto text-gray6">가격</div>
                </>
              ) : (
                <>
                  <div className="w-[65px] text-gray6">분위기</div>
                  <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
                    <div
                      className={`ml-auto w-[${
                        (C[1] / (C[0] + C[1])) * 175
                      }px] bg-purple rounded-full`}></div>
                  </div>
                  <div className="text-purple ml-auto font-bold">가격</div>
                </>
              )}
            </div>
            <div className="flex justify-between text-gray6">
              {C[0] >= C[1] ? (
                <>
                  <div className="text-purple font-bold">
                    {calculatePercentage(C[0], C[1])}%
                  </div>
                  <div className="text-gray6">
                    {calculatePercentageRemain(C[0], C[1])}%
                  </div>
                </>
              ) : (
                <>
                  <div className="text-gray6">
                    {calculatePercentage(C[0], C[1])}%
                  </div>
                  <div className="text-purple font-bold">
                    {calculatePercentageRemain(C[0], C[1])}%
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">음식</div>
            <div className="mb-1 flex items-center text-sm">
              {D[0] >= D[1] ? (
                <>
                  <div className="text-orange w-[65px] font-bold">노포</div>
                  <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
                    <div
                      className={` w-[${
                        (D[0] / (D[0] + D[1])) * 175
                      }px] bg-orange rounded-full`}></div>
                  </div>
                  <div className="ml-auto text-gray6">인테리어</div>
                </>
              ) : (
                <>
                  <div className="w-[65px] text-gray6">노포</div>
                  <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
                    <div
                      className={`ml-auto w-[${
                        (D[1] / (D[0] + D[1])) * 175
                      }px] bg-orange rounded-full`}></div>
                  </div>
                  <div className="text-orange ml-auto font-bold">인테리어</div>
                </>
              )}
            </div>
            <div className="flex justify-between text-gray6">
              {D[0] >= D[1] ? (
                <>
                  <div className="text-orange font-bold">
                    {calculatePercentage(D[0], D[1])}%
                  </div>
                  <div className="text-gray6">
                    {calculatePercentageRemain(D[0], D[1])}%
                  </div>
                </>
              ) : (
                <>
                  <div className="text-gray6">
                    {calculatePercentage(D[0], D[1])}%
                  </div>
                  <div className="text-orange font-bold">
                    {calculatePercentageRemain(D[0], D[1])}%
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">관광지</div>
            <div className="mb-1 flex items-center text-sm">
              {E[0] >= E[1] ? (
                <>
                  <div className="text-green w-[65px] font-bold">액티비티</div>
                  <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
                    <div
                      className={` w-[${
                        (E[0] / (E[0] + E[1])) * 175
                      }px] bg-green rounded-full`}></div>
                  </div>
                  <div className="ml-auto text-gray6">휴양</div>
                </>
              ) : (
                <>
                  <div className="w-[65px] text-gray6">액티비티</div>
                  <div className="flex h-[10px] w-[175px] rounded-full bg-gray2">
                    <div
                      className={`ml-auto w-[${
                        (E[1] / (E[0] + E[1])) * 175
                      }px] bg-green rounded-full`}></div>
                  </div>
                  <div className="text-green ml-auto font-bold ">휴양</div>
                </>
              )}
            </div>
            <div className="flex justify-between text-gray6">
              {E[0] >= E[1] ? (
                <>
                  <div className="text-green font-bold">
                    {calculatePercentage(E[0], E[1])}%
                  </div>
                  <div className="text-gray6">
                    {calculatePercentageRemain(E[0], E[1])}%
                  </div>
                </>
              ) : (
                <>
                  <div className="text-gray6">
                    {calculatePercentage(E[0], E[1])}%
                  </div>
                  <div className="text-green font-bold">
                    {calculatePercentageRemain(E[0], E[1])}%
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPreference;
