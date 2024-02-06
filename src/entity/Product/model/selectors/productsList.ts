import type { IStateScheme } from 'app/providers/StoreProvider';

export const getProductsListIsLoading = (state: IStateScheme): boolean | undefined =>
  state.productsList?.isLoading;
export const getProductsListError = (state: IStateScheme): string | undefined =>
  state.productsList?.error;

export const getProductsListOffset = (state: IStateScheme): number | undefined =>
  state.productsList?.offset;

export const getProductsListLimit = (state: IStateScheme): number | undefined =>
  state.productsList?.limit;

export const getProductsListHasMore = (state: IStateScheme): boolean | undefined =>
  state.productsList?.hasMore;
