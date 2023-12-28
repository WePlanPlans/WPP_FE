import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': 'application/json',
    withCredentials: true,
  },
});

// 리뷰 관련 API

// 리뷰수정
export const putReview = async (
  reviewData: ReviewRequest,
  reviewId: number,
) => {
  const res = await client.put(`reviews/${reviewId}`, reviewData);
  return res;
};

// 리뷰삭제
export const deleteReview = async (reviewId: number) => {
  const res = await client.delete(`reviews/${reviewId}`);
  return res;
};

// 리뷰작성
export const postReview = async (reviewData: ReviewRequest) => {
  const res = await client.post(`reviews`, reviewData);
  return res;
};

// 리뷰댓글조회
export const getReviewComments = async (reviewId: number) => {
  const res = await client.get(`reviews/${reviewId}/comments`);
  return res;
};

// 리뷰키워드조회
export const getReviewKeywords = async (code: number) => {
  const res = await client.get(`reviews/keywords?code=${code}`);
  return res;
};
