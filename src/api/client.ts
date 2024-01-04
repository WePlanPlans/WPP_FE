import axios from 'axios';

const accessToken = window.localStorage.getItem('accessToken');

const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
  withCredentials: true,
});

export default client;
