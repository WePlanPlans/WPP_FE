import axios from 'axios';

const client = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}api/`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default client;
