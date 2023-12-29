import {
  DetailToursInfo,
  DetailToursRating,
  DetailToursMap,
  DetailTourButtons,
} from '.';

// 담당 컴포넌트들 호출하는 컴포넌트(분업 때문에 페이지 느낌으로 나눠봤습니다), API 호출 컴포넌트,
export default function DetailSectionTop() {
  return (
    <>
      <DetailToursInfo />
      <DetailToursRating />
      <DetailToursMap />
      <DetailTourButtons />
    </>
  );
}
