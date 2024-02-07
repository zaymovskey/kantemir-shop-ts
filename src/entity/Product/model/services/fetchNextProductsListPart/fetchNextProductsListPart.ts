import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import {
  getProductsListIsLoading,
  getProductsListHasMore,
  getProductsListLimit,
  getProductsListOffset
} from '../../selectors/productsList';
import { productsListActions } from '../../slices/productsListSlice';
import { fetchProductsList } from '../fetchProductsList/fetchProductsList';

export const fetchNextProductsListPart = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  undefined,
  IThunkConfig<string>
>('productList/fetchNextProductsListPart', async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const hasMore = getProductsListHasMore(getState());
  const limit = getProductsListLimit(getState());
  const offset = getProductsListOffset(getState());
  const loading = getProductsListIsLoading(getState());

  if (!hasMore || loading) return;
  dispatch(productsListActions.setOffset(offset + limit));
  await dispatch(fetchProductsList({ offset: offset + limit }));
});
