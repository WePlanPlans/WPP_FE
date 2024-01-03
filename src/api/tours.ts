import client from './client';

// 여행지 관련 API

// 인기 여행지 조회
export const getTours = async (region: number, page: number, size: number) => {
  const res = await client.get(
    `tours?region=${region}&page=${page}&size=${size}`,
  );
  return res;
};

// 여행지 상세 조회
export const getDetailTours = async (tourItemId: number) => {
  try {
    const {
      data: { data },
    } = await client.get(`tours/${tourItemId}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

// 여행 상품 리뷰 조회
export const getToursReviews = async (tourItemId: number) => {
  const res = await client.get(`tours/${tourItemId}/reviews`);
  return res;
};

// 여행지 검색
export const getToursSearch = async (options: {
  region: string;
  searchWord: string;
  category?: string;
  page?: number;
  size?: number;
}) => {
  const { region, searchWord, category, page = 0, size } = options;

  let query = `tours/search?region=${region}&searchWord=${searchWord}`;

  if (category) {
    query += `&category=${category}`;
  }
  query += `&page=${page}`;

  if (size) {
    query += `&size=${size}`;
  }
  const res = await client.get(query);
  return res;
};
