import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsList, getProductsListIsLoading } from 'entity/Product';
import {
  getProductsListHasMore,
  getProductsListLimit,
  getProductsListOffset
} from 'entity/Product/model/selectors/productsList';
import { productsListActions } from 'entity/Product/model/slices/productsListSlice';
import { type IThunkConfig } from 'app/providers/StoreProvider';

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
