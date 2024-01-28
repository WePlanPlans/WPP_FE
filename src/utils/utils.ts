import { useGetTrips } from '@hooks/useGetTrips';
import { isFirstLoadState, tapState } from '@recoil/plan';
import { visitDateState } from '@recoil/socket';
import { useSetRecoilState } from 'recoil';

export const getEmoji = (content: string) => {
  const emojiMap: { [key: string]: string } = {
    깨끗해요: '🧼',
    친절해요: '😊',
    '뷰가 좋아요': '🏞️',
    '침구가 좋아요': '🛌',
    '주차하기 편해요': '🅿️',
    '냉난방이 잘돼요': '🔥',
    '대중교통이 편해요': '🚌',
    '호캉스하기 좋아요': '🏨',
    '조식이 맛있어요': '🥪',
    '사진 찍기 좋아요': '📸',
    '음식이 맛있어요': '🍲',
    '인테리어가 멋져요': '🛋️',
    '매장이 청결해요': '🧹',
    '특별한 메뉴가 있어요': '🍽️',
    '가성비가 좋아요': '💰',
    '재료가 신선해요': '🥬',
    '화장실이 깨끗해요': '🚻',
    '사진이 잘 나와요': '🖼️',
    '관리가 잘 되어있어요': '✨',
    '볼거리가 많아요': '👀',
    '편의시설이 잘 되어 있어요': '🏪',
    '가격이 합리적이에요': '💵',
    '방문객이 많아요': '👥',
  };
  return emojiMap[content] || '🌟';
};

export function calculateDayAndDate(startDate: string, endDate: string) {
  let start = new Date(startDate);
  const end = new Date(endDate);
  const differenceInDays: number = Math.round(
    (end.getTime() - start.getTime()) / (1000 * 3600 * 24),
  );

  const createDayArray = (prefix: string) =>
    Array.from(
      { length: differenceInDays + 1 },
      (_, i) => `${prefix} ${i + 1}`,
    );

  const DayArr = createDayArray('DAY');
  const SmallDayArr = createDayArray('Day');

  const DateArr = [];

  while (start <= end) {
    DateArr.push(start.toISOString().split('T')[0]);
    start = new Date(start.setDate(start.getDate() + 1));
  }

  return {
    DayArr,
    DateArr,
    SmallDayArr,
  };
}

export const resetVisitDateAndTab = () => {
  const setVisitDate = useSetRecoilState(visitDateState);
  const setIsFirstLoad = useSetRecoilState(isFirstLoadState);
  const setTapState = useSetRecoilState(tapState);
  const { startDate } = useGetTrips();

  if (startDate) {
    setVisitDate({ visitDate: startDate });
  }
  setIsFirstLoad(true);
  setTapState('0');
};
