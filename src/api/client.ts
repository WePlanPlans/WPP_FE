import axios from 'axios';

let accessToken;
if (window.localStorage.getItem('accessToken')) {
  accessToken = window.localStorage.getItem('accessToken');
}

// axios 인스턴스를 생성합니다.
const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  },
  withCredentials: true,
});

export default client;
