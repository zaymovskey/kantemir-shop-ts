import type { IStateScheme } from 'app/providers/StoreProvider';

export const getProductsListIsLoading = (state: IStateScheme): boolean | undefined =>
  state.productsList?.isLoading;
export const getProductsListError = (state: IStateScheme): string | undefined =>
  state.productsList?.error;
