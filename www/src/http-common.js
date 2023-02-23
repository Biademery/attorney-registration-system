import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aqueous-citadel-59326.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
