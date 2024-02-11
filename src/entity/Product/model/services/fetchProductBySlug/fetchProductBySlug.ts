import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosError } from 'axios';
import { type IProduct } from 'entity/Product';
import { type IThunkConfig } from 'app/providers/StoreProvider';
import { type IAxiosError } from 'shared/api';
import { API_METHODS } from 'shared/api/api';

export const fetchProductBySlug = createAsyncThunk<
  IProduct,
  string,
  IThunkConfig<string>
>(
  'productDetails/fetchProductBySlug',
  async (productSlug, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<IProduct>(
        API_METHODS.products.productDetail(productSlug)
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
