import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'content-type': 'application/json',
    withCredentials: true,
  },
});

// 인증 관련 API

// 회원가입
export const postSignup = async (authData: AuthRequest) => {
  const res = await client.post(`auth/signup`, authData);
  return res;
};

// 로그아웃
export const postLogout = async () => {
  const res = await client.post(`auth/logout`);
  return res;
};

// 로그인-이메일
export const postEmailLogin = async (LoginData: LoginRequest) => {
  const res = await client.post(`auth/login`, LoginData);
  return res;
};

// 로그인-카카오
export const postKakaoLogin = async (LoginData: LoginRequest) => {
  const res = await client.post(`auth/login/kakao`, LoginData);
  return res;
};

// 닉네임 중복 조회
export const getCheckNickname = async (nickname: string) => {
  const res = await client.get(`auth/nicknames/check/${nickname}`);
  return res;
};

// 이메일 중복 조회
export const getCheckEmail = async (email: string) => {
  const res = await client.get(`auth/emails/check/${email}`);
  return res;
};
