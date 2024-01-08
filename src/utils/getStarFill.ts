export const getStarFill = (index: number, rating: number) => {
  if (index < Math.floor(rating)) {
    return '#FFEC3E'; // 노란 별
  } else if (index === Math.floor(rating) && rating % 1 !== 0) {
    return 'url(#grad)'; // 반반
  } else {
    return '#EDEDED'; // 빈 별
  }
};
