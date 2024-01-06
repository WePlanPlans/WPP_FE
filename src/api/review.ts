import client from './client';

// 리뷰 관련 API

// 리뷰수정
export const putReview = async (
  reviewData: ReviewRequest,
  reviewId: number,
) => {
  const { tourItemId, ...rest } = reviewData;
  const res = await client.put(`reviews/${reviewId}`, rest);
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
export const getReviewComments = async (
  reviewId: number,
  page?: number,
  size?: number,
) => {
  try {
    let url = `reviews/${reviewId}/comments`;
    if (page !== undefined) {
      url += `?page=${page}`;
    }
    if (size !== undefined) {
      url += `${page !== undefined ? '&' : '?'}size=${size}`;
    }
    const res = await client.get(url);
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 리뷰키워드조회
export const getReviewKeywords = async (keywordType: string) => {
  const res = await client.get(`reviews/keywords?keywordType=${keywordType}`);
  return res;
};
