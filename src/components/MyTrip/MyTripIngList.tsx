import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import MyTripIngItem from './MyTripIngItem';

interface MyTripIngListProps {
  myTripsData: MyTripType[];
}

const MyTripIngList: React.FC<MyTripIngListProps> = ({ myTripsData }) => {
  if (!myTripsData) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <>
      <div className="no-scrollbar mt-[8px] grid grid-cols-1 gap-[8px] overflow-y-scroll ">
        {myTripsData.map((myTripList: MyTripType) => (
          <MyTripIngItem key={uuidv4()} myTripList={myTripList} />
        ))}
      </div>
    </>
  );
};

export default MyTripIngList;
