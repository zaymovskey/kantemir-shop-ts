import { type IStateScheme } from 'app/providers/StoreProvider';
import { type IProduct } from '../types/Product';

export const getProductDetailsData = (state: IStateScheme): IProduct | undefined =>
  state.productDetails?.data;
export const getProductDetailsIsLoading = (state: IStateScheme): boolean | undefined =>
  state.productDetails?.isLoading;
export const getProductDetailsError = (state: IStateScheme): string | undefined =>
  state.productDetails?.error;
