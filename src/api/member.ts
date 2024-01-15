import type { EditPasswordProps } from '@/@types/auth.types';
import authClient from './authClient';
import client from './client';

// 유저 관련 API

// 회원 정보 조회
export const getMember = async () => {
  const res = await authClient.get(`member`);
  return res;
};

// 회원 정보 수정
export const putMember = async (memberData: MemberRequest) => {
  const res = await authClient.put(`member`, memberData);
  return res;
};

// 여행 취향 수정
export const putMemberSurvey = async (surveyData: EditSurvey) => {
  const res = await authClient.put(`member/survey`, surveyData);
  return res;
};

// 비밀번호 수정
export const putMemberPassword = async (pwDataa: EditPasswordProps) => {
  const res = await authClient.put(`member/password`, pwDataa);
  return res;
};

// 프로필 이미지 업로드
export const postMember = async (imgData: any) => {
  authClient.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  const res = await authClient.post(`member`, imgData);
  authClient.defaults.headers.post['Content-Type'] = 'application/json';

  return res;
};

// 회원 탈퇴
export const deleteMember = async () => {
  const res = await authClient.delete(`member`);
  return res;
};

// 나의 여정 조회
export const getMemberTrips = async (page?: number, size?: number) => {
  try {
    const res = await authClient.get(`trips?&page=${page}&size=${size}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

// 나의 관심 목록 조회
export const getMemberTours = async (page?: number, size?: number) => {
  try {
    const res = await authClient.get(`member/tours?&page=${page}&size=${size}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getTours = async (
  region?: string,
  page?: number,
  size?: number,
) => {
  try {
    const res = await client.get(
      `tours?${
        region !== '전체' && `region=${region}`
      }&page=${page}&size=${size}`,
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 나의 리뷰 조회
export const getMemberReviews = async (page?: number, size?: number) => {
  try {
    let url = `member/reviews`;
    if (page !== undefined) {
      url += `?page=${page}`;
    }
    if (size !== undefined) {
      url += `${page !== undefined ? '&' : '?'}size=${size}`;
    }
    const res = await authClient.get(url);
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 나의 관심 목록 삭제
// export const deleteMemberTours = async (tourItemId: number) => {
//   const res = await authClient.delete(`member/tours/${tourItemId}`);
//   return res;
// };
