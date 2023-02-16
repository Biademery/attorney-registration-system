import axios from 'axios';

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

const api = axios.create({
  baseURL: 'https://git.heroku.com/peaceful-sands-97197.git/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
