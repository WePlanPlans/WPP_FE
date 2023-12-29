import client from './client';

// 카테고리 관련 API

// 카테고리 조회
export const getCategory = async () => {
  const res = await client.get(`category`);
  return res;
};
