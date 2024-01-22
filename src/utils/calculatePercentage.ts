export const calculatePercentage = (count: number, totalCount: number) =>
  totalCount === 0 && count === 0
    ? '0'
    : ((count / totalCount) * 100).toFixed(0);

export const calculatePercentageRemain = (count: number, totalCount: number) =>
  totalCount === 0 && count === 0
    ? '0'
    : (((totalCount - count) / totalCount) * 100).toFixed(0);
