import client from './client';
import authClient from './authClient';

// 여정 관련 API

// 여정 상세조회
export const getTrips = async (tripId: number) => {
  const res = await client.get(`trips/${tripId}`);
  return res;
};

// 여정 기본정보 수정
export const putTrips = async (tripId: number, tripsData: TripRequest) => {
  const res = await client.put(`trips/${tripId}`, tripsData);
  return res;
};

// 여정 탈퇴
export const deleteTrips = async (tripId: number) => {
  try {
    const res = await authClient.delete(`trips/${tripId}`);

    return res;
  } catch (e) {
    console.error(e);
  }
};

// 여정 생성
export const postTrips = async (tripsData: TripRequest) => {
  const res = await authClient.post(`trips`, tripsData);
  return res;
};

// 우리의 관심목록 조회
export const getTripsLike = async (
  tripId: number,
  page: number,
  size: number,
) => {
  const res = await authClient.get(
    `trips/${tripId}/tripLikedTours?page=${page}&size=${size}`,
  );

  return res.data;
};

// 우리의 관심 목록 등록
export const postTripsLike = async (tripId: number, tourItemIds: number[]) => {
  const requestBody = {
    tourItemIds: tourItemIds,
  };
  const res = await authClient.post(
    `trips/${tripId}/tripLikedTours`,
    requestBody,
  );
  return res;
};

// 우리의 관심 목록 좋아요/싫어요
export const postTripsLikeHate = async (
  tripId: number,
  tourId: number,
  prefer: boolean,
  notPrefer: boolean,
) => {
  const res = await authClient.post(
    `trips/${tripId}/tripLikedTours/${tourId}?prefer=${prefer}&notPrefer=${notPrefer}`,
  );
  return res;
};

// 우리의 여행취향 조회
export const getTripsSurvey = async (tripId: number) => {
  const res = await client.get(`trips/${tripId}/survey`);
  return res;
};
// 우리의 여행취향 참여/미참여 회원 조회
export const getTripsSurveyMembers = async (tripId: number) => {
  const res = await client.get(`trips/${tripId}/survey/members`);
  return res;
};
// 여정을 공유하고 있는 회원 조회
export const getTripsMembers = async (tripId: number) => {
  const res = await client.get(`trips/${tripId}/members`);
  return res;
};

// 편집권한 조회
export const getTripsAuthority = async (tripId: string) => {
  const res = await authClient.get(`trips/${tripId}/authority`);
  return res;
};

// 여정 참여 코드 조회
export const getTripsjoin = async (tripId: string) => {
  const res = await authClient.get(`trips/${tripId}/join`);
  return res;
};

// 여정 참여
export const postTripsjoin = async (tripId: number, joinCode: string) => {
  const res = await authClient.post(`trips/${tripId}/join`, { joinCode });
  return res;
};
