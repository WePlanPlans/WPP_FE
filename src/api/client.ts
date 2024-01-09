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

// 임시 인터셉터(켜야 API에 토큰 헤더 담김)
// import axios from 'axios';

// // axios 인스턴스를 생성합니다.
// const client = axios.create({
//   baseURL: import.meta.env.VITE_SERVER_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: true,
// });

// export default client;

// client.interceptors.request.use((config) => {
//   const accessToken = window.localStorage.getItem('accessToken');

//   if (accessToken) {
//     config.headers['Authorization'] = `Bearer ${accessToken}`;
//   }

//   console.log(accessToken);

//   return config;
// });

// client.interceptors.response.use((res) => {
//   if (200 <= res.status && res.status < 300) {
//     return res;
//   }

//   return Promise.reject(res.data);
// });
