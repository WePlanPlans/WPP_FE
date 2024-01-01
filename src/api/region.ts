import client from './client';

// 지역 관련 API

// 전체 지역 조회
export const getRegion = async (areaCode: number) => {
  const res = await client.get(`region?areaCode=${areaCode}`);
  return res;
};

// 인기 지역 조회
export const getPopularRegion = async () => {
  const res = await client.get(`region/popular`);
  return res;
};
