export const calculateTripDuration = (
  startDate: string,
  endDate: string,
): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const timeDiff = Math.abs(end.getTime() - start.getTime());
  const durationInDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return `${Math.max(durationInDays, 0)}박 ${Math.max(
    durationInDays + 1,
    1,
  )}일`;
};
