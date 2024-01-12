import Tab from '@components/common/tab/Tab';

const TripSectionTop = () => {
  return (
    <div className="min-h-[800px]">
      <div className="my-1">여정 생성 완료 페이지</div>
      <Tab
        lists={['우리의 여행취향', '우리의 관심목록']}
        contents={[<div>우리의 여행취향</div>, <div>우리의 관심목록</div>]}
      />
    </div>
  );
};

export default TripSectionTop;
