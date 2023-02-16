import axios from 'axios';

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

const api = axios.create({
  baseURL: 'https://still-anchorage-45008.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
