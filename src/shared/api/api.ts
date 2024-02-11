import axios from 'axios';
import { encodeQueryData } from 'shared/lib/utils';

export interface IAxiosError {
  detail: string;
}

export const API_METHODS = {
  products: {
    productDetail: (productSlug: string) =>
      `/api/products/productDetail/${productSlug}`,

    productList: (offset: number = 0, limit: number = 0) =>
      `/api/products/productsList?${encodeQueryData({ offset, limit })}`
  }
};

export const $api = axios.create({
  baseURL: _API_URL_
});
