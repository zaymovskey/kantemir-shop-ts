import { type IStateScheme } from 'app/providers/StoreProvider';
import { type IProduct } from '../types/Product';

export const getArticleDetailsData = (state: IStateScheme): IProduct | undefined =>
  state.productDetails?.data;
export const getArticleDetailsIsLoading = (state: IStateScheme): boolean | undefined =>
  state.productDetails?.isLoading;
export const getArticleDetailsError = (state: IStateScheme): string | undefined =>
  state.productDetails?.error;
