import { type IProduct } from './Product';

export interface IProductDetailsScheme {
  isLoading: boolean;
  error?: string;
  data?: IProduct;
}
