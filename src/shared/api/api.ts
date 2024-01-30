import axios from 'axios';

export interface IAxiosError {
  detail: string;
}

export const $api = axios.create({
  baseURL: _API_URL_
});
