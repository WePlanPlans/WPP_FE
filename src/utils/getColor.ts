// 번호에 따른 색상을 반환하는 함수
export const getColor = (num: number) => {
  const colors = ['#FF2167', '#7932FF', '#29DDF6', '#FFAC16', '#16E7A9'];

  // 색상 배열에서 번호에 해당하는 색상을 반환 (숫자가 6 이상일 경우에는 색상 순서 반복)
  return colors[(num - 1) % colors.length];
};
