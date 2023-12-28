import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': 'application/json',
    withCredentials: true,
  },
});

// 카테고리 관련 API

// 카테고리 조회
export const getCategory = async () => {
  const res = await client.get(`category`);
  return res;
};
