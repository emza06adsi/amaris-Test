import axios from 'axios';

export const AxiosPath = axios.create({
  baseURL: 'https://api.themoviedb.org/3/tv',
  params: {
    api_key: '20be09a18aec70982dd879c0db10e10d',
    languaje:'es-ES'
  },
});
