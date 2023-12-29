import client from './client';

// 여정 관련 API

// 나의 여정 목록조회
export const getTrips = async () => {
  const res = await client.get(`trips`);
  return res;
};

// 여정 생성
export const postTrips = async (tripsData: TripRequest) => {
  const res = await client.post(`trips`, tripsData);
  return res;
};

// 여정 탈퇴
export const deleteTrips = async (tripId: number) => {
  const res = await client.delete(`trips/${tripId}`);
  return res;
};
