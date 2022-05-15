import axios from 'axios';

const api = axios.create({
  baseURL: 'https://zenquotes.io/',
});

export default api;
