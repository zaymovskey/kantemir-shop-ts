import axios from 'axios';

export interface IAxiosError {
  detail: string;
}

export const API_METHODS = {
  catalog: {
    productDetail: (productSlug: string) => `/api/catalog/productDetail/${productSlug}/`
  }
};

export const $api = axios.create({
  baseURL: _API_URL_
});
