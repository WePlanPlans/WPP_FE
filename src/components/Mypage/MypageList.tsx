import MypageItem from './MypageItem';

const MypageList = () => {
  return (
    <div>
      <MypageItem link="/mytour">나의 여정</MypageItem>
      <MypageItem link="/wishlist">나의 관심 여행지</MypageItem>
      <MypageItem link="/myreview">나의 리뷰</MypageItem>
      <MypageItem link="/mypage/survey">나의 여행 취향 설정</MypageItem>
    </div>
  );
};

export default MypageList;
