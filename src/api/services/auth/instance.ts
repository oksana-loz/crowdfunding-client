import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/';

export const $authAPI = axios.create({
  baseURL: BASE_URL,
});
