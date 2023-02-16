import axios from 'axios';

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

const api = axios.create({
  baseURL: 'https://attorney-registration-system-xzbp.vercel.app/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
