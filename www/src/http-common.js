import axios from 'axios';

const api = axios.create({
  baseURL: 'https://git.heroku.com/intense-wildwood-47079.git/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
