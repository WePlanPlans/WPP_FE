import React, { useEffect } from 'react';
import { getTripsSurvey } from '@api/trips';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { MoreIcon } from '@components/common/icons/Icons';
import { RightIcon } from '@components/common/icons/Icons';

const TripPreference: React.FC = () => {
  const params = useParams();
  const tripId = Number(params.id);
  const { data: tripPreference, isLoading } = useQuery({
    queryKey: ['tripPreference', tripId],
    queryFn: () => getTripsSurvey(tripId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    console.log('tripPreference', tripPreference);
  }, [tripPreference]);

  return (
    <div className=" ml-[-40px] mr-[-40px] mt-[-20px] flex flex-col items-center bg-gray1 ">
      <button className="mb-[17.5px] mt-[20px] flex w-[335px] items-center rounded-full bg-white px-6 py-4 text-sm">
        <div className="text-gray6">내 여행 취향 설정하러 가기</div>
        <div className="ml-auto">
          <RightIcon fill="#5E5E5E" />
        </div>
      </button>
      <div className="mb-[10px] ml-auto mr-[40px] flex items-center text-sm ">
        <div>n명 참여</div>
        <div className="mt-0.5">
          <MoreIcon size={20} color="none" fill="#888888" />
        </div>
      </div>
      {tripPreference?.data?.data && (
        <div>
          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">계획성</div>
            <div className="mb-1 flex justify-between text-sm text-gray6">
              <div>철저하게</div>
              <div className="w-[100px] bg-pink-200">(그래프)</div>
              <div>여유롭게</div>
            </div>
            <div className="flex justify-between text-gray6">
              <div>
                {(
                  (tripPreference.data.data.planningCount /
                    tripPreference.data.data.planningTotalCount) *
                  100
                ).toFixed(0)}
                %
              </div>
              <div>
                {(
                  ((tripPreference.data.data.planningTotalCount -
                    tripPreference.data.data.planningCount) /
                    tripPreference.data.data.planningTotalCount) *
                  100
                ).toFixed(0)}
                %
              </div>
            </div>
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">활동시간</div>
            <div className="mb-1 flex justify-between text-sm text-gray6">
              <div>아침형</div>
              <div className="w-[100px] bg-pink-200">(그래프)</div>
              <div>저녁형</div>
            </div>
            <div className="flex justify-between text-gray6">
              <div>
                {(
                  (tripPreference.data.data.activeHoursCount /
                    tripPreference.data.data.activeHoursTotalCount) *
                  100
                ).toFixed(0)}
                %
              </div>
              <div>
                {(
                  ((tripPreference.data.data.activeHoursTotalCount -
                    tripPreference.data.data.activeHoursCount) /
                    tripPreference.data.data.activeHoursTotalCount) *
                  100
                ).toFixed(0)}
                %
              </div>
            </div>
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">숙소</div>
            <div className="mb-1 flex justify-between text-sm text-gray6">
              <div>분위기</div>
              <div className="w-[100px] bg-pink-200">(그래프)</div>
              <div>가격</div>
            </div>
            <div className="flex justify-between text-gray6">
              <div>
                {(
                  (tripPreference.data.data.accommodationCount /
                    tripPreference.data.data.accommodationTotalCount) *
                  100
                ).toFixed(0)}
                %
              </div>
              <div>
                {(
                  ((tripPreference.data.data.accommodationTotalCount -
                    tripPreference.data.data.accommodationCount) /
                    tripPreference.data.data.accommodationTotalCount) *
                  100
                ).toFixed(0)}
                %
              </div>
            </div>
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">음식</div>
            <div className="mb-1 flex justify-between text-sm text-gray6">
              <div>노포</div>
              <div className="w-[100px] bg-pink-200">(그래프)</div>
              <div>인테리어</div>
            </div>
            <div className="flex justify-between text-gray6">
              <div>
                {(
                  (tripPreference.data.data.foodCount /
                    tripPreference.data.data.foodTotalCount) *
                  100
                ).toFixed(0)}
                %
              </div>
              <div>
                {(
                  ((tripPreference.data.data.foodTotalCount -
                    tripPreference.data.data.foodCount) /
                    tripPreference.data.data.foodTotalCount) *
                  100
                ).toFixed(0)}
                %
              </div>
            </div>
          </div>

          <div className="mb-4 h-[104px] w-[335px] rounded-xl bg-white px-4 py-4">
            <div className="text-md mb-3 font-bold">관광지</div>
            <div className="mb-1 flex justify-between text-sm text-gray6">
              <div>액티비티</div>
              <div className="w-[100px] bg-pink-200">(그래프)</div>
              <div>휴양</div>
            </div>
            <div className="flex justify-between text-gray6">
              <div>
                {(
                  (tripPreference.data.data.tripStyleCount /
                    tripPreference.data.data.tripStyleTotalCount) *
                  100
                ).toFixed(0)}
                %
              </div>
              <div>
                {(
                  ((tripPreference.data.data.tripStyleTotalCount -
                    tripPreference.data.data.tripStyleCount) /
                    tripPreference.data.data.tripStyleTotalCount) *
                  100
                ).toFixed(0)}
                %
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPreference;
// 현재 내 값/토탈 * 100 = 답
