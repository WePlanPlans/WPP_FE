import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import MyTripItem from './MyTripItem';

interface MyTripIngListProps {
  myTripsData: MyTripType[];
}

const MyTripAfterList: React.FC<MyTripIngListProps> = ({ myTripsData }) => {
  if (!myTripsData) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  const sortedTrips = myTripsData.sort(
    (a: MyTripType, b: MyTripType) =>
      new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  );

  return (
    <>
      <div className="mb-[10px] mt-[40px]">
        <h1 className="text-xl font-bold text-stone-900">지난 여행</h1>
      </div>
      <div className="no-scrollbar grid grid-cols-1 gap-[5px] overflow-y-scroll">
        {sortedTrips.map((myTripList: MyTripType) => (
          <MyTripItem key={uuidv4()} myTripList={myTripList} />
        ))}
      </div>
    </>
  );
};

export default MyTripAfterList;
