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
