import type { IStateScheme } from 'app/providers/StoreProvider';

export const getProductsListIsLoading = (state: IStateScheme): boolean =>
  state.productsList?.isLoading ?? false;
export const getProductsListError = (state: IStateScheme): string | undefined =>
  state.productsList?.error;

export const getProductsListOffset = (state: IStateScheme): number =>
  state.productsList?.offset ?? 0;

export const getProductsListLimit = (state: IStateScheme): number =>
  state.productsList?.limit ?? 3;

export const getProductsListHasMore = (state: IStateScheme): boolean =>
  state.productsList?.hasMore ?? true;
