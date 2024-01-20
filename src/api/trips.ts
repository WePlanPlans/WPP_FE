import client from './client';
import authClient from './authClient';

// 여정 관련 API

// 여정 상세조회
export const getTrips = async (tripId: number) => {
  const res = await client.get(`trips/${tripId}`);
  return res;
};

// 여정 기본정보 수정
export const putTrips = async (
  tripId: number,
  tourItemId: number,
  visitDate: string,
) => {
  const requestBody = {
    tourItemId: tourItemId,
    visitDate: visitDate,
  };
  const res = await authClient.post(`trips/${tripId}`, requestBody);
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
export const getTripsLike = async (options: {
  tripId: number;
  category?: string;
  page?: number;
  size?: number;
}) => {
  const { tripId, category, page = 0, size } = options;

  let query = `trips/${tripId}/tripLikedTours?`;

  if (category) {
    query += `&category=${category}`;
  }
  query += `&page=${page}`;

  if (size) {
    query += `&size=${size}`;
  }
  const res = await authClient.get(query);
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
) => {
  const res = await client.post(
    `trips/${tripId}/tripLikedTours/${tourId}?prefer=${prefer}`,
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
