import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosError } from 'axios';
import { type IProduct } from 'entity/Product';
import { type IThunkExtraArg } from 'app/providers/StoreProvider';
import { type IAxiosError } from 'shared/api';
import { API_METHODS } from 'shared/api/api';

export const fetchProducts = createAsyncThunk<
  IProduct[],
  { offset?: number; limit?: number },
  { rejectValue: string; extra: IThunkExtraArg }
>(
  'productDetails/fetchProductBySlug',
  async ({ offset, limit }, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<IProduct[]>(
        API_METHODS.catalog.productList(offset, limit)
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
