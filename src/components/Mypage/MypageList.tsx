import MypageItem from './MypageItem';

const MypageList = () => {
  return (
    <div>
      <MypageItem link="/mytrip">나의 여정</MypageItem>
      <MypageItem link="/wishlist">나의 관심 목록</MypageItem>
      <MypageItem link="/myPageReview">나의 리뷰</MypageItem>
      <MypageItem link="/mypage/survey">나의 여행 취향 설정</MypageItem>
    </div>
  );
};

export default MypageList;
