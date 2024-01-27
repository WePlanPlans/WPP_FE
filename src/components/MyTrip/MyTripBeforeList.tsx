import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import MyTripItem from './MyTripItem';

interface MyTripIngListProps {
  myTripsData: MyTripType[];
}

const MyTripBeforeList: React.FC<MyTripIngListProps> = ({ myTripsData }) => {
  if (!myTripsData) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  if (myTripsData.length > 0) {
    return (
      <div className="mt-[40px]">
        <div className="mb-[16px]">
          <h1 className="text-[18px] font-bold text-gray7">다가오는 여행</h1>
        </div>
        <div className="no-scrollbar grid grid-cols-1 gap-[24px] overflow-y-scroll">
          {myTripsData.map((myTripList: MyTripType) => (
            <MyTripItem key={uuidv4()} myTripList={myTripList} />
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default MyTripBeforeList;
