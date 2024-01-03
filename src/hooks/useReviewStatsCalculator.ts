import { useMemo } from 'react';
import { TourKeywordInfo } from '@/@types/tours.types';

const getMaxMinCounts = (reviewStats: TourKeywordInfo[]) => {
  const counts = reviewStats.map((item) => item.keywordCount);
  return {
    maxCount: Math.max(...counts),
    minCount: Math.min(...counts),
  };
};

const calculateColorIntensity = (
  count: number,
  maxCount: number,
  minCount: number,
) => {
  const range = maxCount - minCount;
  const intensity = range ? (count - minCount) / range : 0;

  // 기준 색상 HSL(160, 70%, 80%)
  const baseHue = 160;
  const baseSaturation = 70;
  const baseLightness = 80;

  // 최소 명도 HSL(160, 40%, 95%)
  const minLightness = 95;

  let lightness =
    baseLightness + (1 - intensity) * (minLightness - baseLightness);

  lightness = Math.min(lightness, minLightness);

  return `hsl(${baseHue}, ${baseSaturation}%, ${lightness}%)`;
};

const useReviewStatsCalculator = (reviewStats: TourKeywordInfo[] | null) => {
  const { maxCount, minCount } = useMemo(() => {
    return reviewStats
      ? getMaxMinCounts(reviewStats)
      : { maxCount: 0, minCount: 0 };
  }, [reviewStats]);

  const calculateWidth = (count: number) => {
    const range = maxCount - minCount;
    return range ? ((count - minCount) / range) * 60 + 20 : 20;
  };

  const getColor = (count: number) =>
    calculateColorIntensity(count, maxCount, minCount);

  return { calculateWidth, getColor };
};

export default useReviewStatsCalculator;
