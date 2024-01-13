// utils.ts
export const calculatePercentage = (count: number, totalCount: number) =>
  ((count / totalCount) * 100).toFixed(0);

export const calculatePercentageRemain = (count: number, totalCount: number) =>
  (((totalCount - count) / totalCount) * 100).toFixed(0);
