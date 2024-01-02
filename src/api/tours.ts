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
  console.log('res', res);
  console.log('res.data.data.reviewInfos', res.data.data.reviewInfos);
  return res;
};

// 여행지 검색
export const getToursSearch = async (
  region: number,
  category: number,
  searchWord: string,
  page: number,
  size: number,
) => {
  const res = await client.get(
    `tours/search?region=${region}&category=${category}&searchWord=${searchWord}&page=${page}&size=${size}}`,
  );
  return res;
};
