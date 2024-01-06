import client from './client';

// 인증 관련 API

// 이메일 중복 조회
export const getCheckEmail = async (email: string) => {
  const res = await client.get(`auth/emails/check/${email}`);
  return res;
};

// 닉네임 중복 조회
export const getCheckNickname = async (nickname: string) => {
  const res = await client.get(`auth/nicknames/check/${nickname}`);
  return res;
};

// 회원가입
export const postSignup = async (authData: AuthRequest) => {
  const res = await client.post(`auth/signup`, authData);
  return res;
};

// 로그인-이메일
export const postEmailLogin = async (LoginData: LoginFormVlaue) => {
  const res = await client.post(`auth/login`, LoginData);
  return res;
};

// 로그인-카카오
export const postKakaoLogin = async (LoginData: LoginFormVlaue) => {
  const res = await client.post(`auth/login/kakao`, LoginData);
  return res;
};

// 로그아웃
// TODO 서지수| 나중에 확인하고 수정하기
export const postLogout = async () => {
  const res = await client.post(`auth/logout`);
  return res;
};
