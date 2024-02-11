import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosError } from 'axios';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import { type IAxiosError } from 'shared/api';
import { API_METHODS } from 'shared/api/api';
import { getProductsListLimit } from '../../selectors/productsList';
import { type IProduct } from '../../types/Product';

interface IFetchProductsListArgs {
  offset?: number;
}

export const fetchProductsList = createAsyncThunk<
  IProduct[],
  IFetchProductsListArgs,
  IThunkConfig<string>
>(
  'productsList/fetchProductsList',
  async ({ offset }, { extra, rejectWithValue, getState }) => {
    const limit = getProductsListLimit(getState());

    try {
      const response = await extra.api.get<IProduct[]>(
        API_METHODS.products.productList(offset, limit)
      );

      if (response.data === null) {
        throw new Error('empty data');
      }

      return response.data;
    } catch (_err) {
      const error = _err as AxiosError<IAxiosError>;
      if (error.response == null) {
        throw _err;
      }
      return rejectWithValue(error.response.data.detail);
    }
  }
);
