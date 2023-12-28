import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': 'application/json',
    withCredentials: true,
  },
});

// 여행지 관련 API

// 인기 여행지 조회
export const getTours = async (region: number) => {
  const res = await client.get(`tours?region=${region}`);
  return res;
};

// 여행지 상세 조회
export const getDetailTours = async (tourId: number) => {
  const res = await client.get(`tours/${tourId}`);
  return res;
};

// 여행 상품 리뷰 조회
export const getToursReviews = async (tourId: number) => {
  const res = await client.get(`tours/${tourId}/reviews`);
  return res;
};

// 여행지 검색
export const getToursSearch = async (
  region: number,
  type: number,
  keyword: number,
) => {
  const res = await client.get(
    `tours/search?region=${region}&type=${type}&keyword=${keyword}`,
  );
  return res;
};
