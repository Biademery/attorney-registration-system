import axios from 'axios';

const api = axios.create({
  baseURL: 'https://intense-wildwood-47079-cfbddbbcaa51.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
