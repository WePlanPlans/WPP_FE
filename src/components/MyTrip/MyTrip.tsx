import { useQuery } from '@tanstack/react-query';
import NoDataMessage from '@components/common/noData/NoDataMessage';
import { getMemberTrips } from '@api/member';
import { PenIcon } from '@components/common/icons/Icons';

import MyTripIngList from './MyTripIngList';
import MyTripBeforeList from './MyTripBeforeList';
import MyTripAfterList from './MyTripAfterList';

interface MyTripProps {
  myTripsData: MyTripType[];
  isLoading: boolean;
}

// 나의 여정 컴포넌트
const MyTrip = () => {
  const { data, error } = useQuery({
    queryKey: ['myTrips'],
    queryFn: () => getMemberTrips(),
  });

  if (error) {
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { ingTrips, beforeTrips, afterTrips } = classifyTrips(data);

  return (
    <div className="mt-3 min-h-[100vh]">
      <div className="pb-[15px]">
        <h1 className="text-[24px] font-bold text-gray7">나의 여정</h1>
      </div>
      {data.length > 0 ? (
        <>
          <MyTripIngList myTripsData={ingTrips} />
          <MyTripBeforeList myTripsData={beforeTrips} />
          <MyTripAfterList myTripsData={afterTrips} />
        </>
      ) : (
        <NoDataMessage
          message1="참여하고 있는 여정이 없어요."
          message2="새로운 여행을 계획해보세요!"
          icon={<PenIcon size={44} fill="#EDEDED" color="#EDEDED" />}
        />
      )}
    </div>
  );
};

const classifyTrips = (data: MyTripProps['myTripsData']) => {
  if (!data) {
    return {
      ingTrips: [],
      beforeTrips: [],
      afterTrips: [],
    };
  }

  const ingTrips = data.filter((trip) => trip.tripStatus === '여행중');
  const beforeTrips = data.filter((trip) => trip.tripStatus === '여행전');
  const afterTrips = data.filter((trip) => trip.tripStatus === '여행완료');

  return {
    ingTrips,
    beforeTrips,
    afterTrips,
  };
};

export default MyTrip;
