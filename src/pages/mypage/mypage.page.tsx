import MypageInfo from '@components/Mypage/MypageInfo';
import MypageList from '@components/Mypage/MypageList';

const Mypage = () => {
  return (
    <div className="flex h-[95vh] flex-col">
      <MypageInfo />
      <MypageList />
    </div>
  );
};

export default Mypage;
