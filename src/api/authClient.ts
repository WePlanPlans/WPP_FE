import axios from 'axios';

const authClient = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}api/`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default authClient;
