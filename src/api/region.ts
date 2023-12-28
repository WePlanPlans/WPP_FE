import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': 'application/json',
    withCredentials: true,
  },
});

// 지역 관련 API

// 전체 지역 조회
export const getTours = async (areaCode: number) => {
  const res = await client.get(`region?areaCode=${areaCode}`);
  return res;
};

// 인기 지역 조회
export const getPopularTours = async () => {
  const res = await client.get(`region/popular`);
  return res;
};
