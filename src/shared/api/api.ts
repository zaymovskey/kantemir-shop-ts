import axios from 'axios';

export interface IAxiosError {
  detail: string;
}

export const API_METHODS = {
  catalog: {
    productDetail: (productSlug: string) =>
      `/api/catalog/productDetail/${productSlug}/`,

    productList: (offset: number = 0, limit: number = 0) =>
      `/api/catalog/productList/${offset}/${limit}`
  }
};

export const $api = axios.create({
  baseURL: _API_URL_
});
