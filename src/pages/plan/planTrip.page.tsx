import Tab from '@components/common/tab/Tab';

const PlanTrip = () => {
  return (
    <>
      <div>여행 계획 페이지</div>
      <Tab
        lists={['Day1', 'Day2', 'Day3']}
        contents={[<div>Day1</div>, <div>Day2</div>, <div>Day3</div>]}
      />
    </>
  );
};

export default PlanTrip;
