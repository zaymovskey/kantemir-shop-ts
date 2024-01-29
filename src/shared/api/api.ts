import axios from 'axios';

export const $api = axios.create({
  baseURL: _API_URL_
});
