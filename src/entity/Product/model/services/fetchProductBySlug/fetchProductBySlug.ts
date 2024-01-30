import { createAsyncThunk } from '@reduxjs/toolkit';
import { type AxiosError } from 'axios';
import { type IProduct } from 'entity/Product';
import { type IThunkExtraArg } from 'app/providers/StoreProvider';
import { type IAxiosError } from 'shared/api';

export const fetchProductBySlug = createAsyncThunk<
  IProduct,
  string,
  { rejectValue: string; extra: IThunkExtraArg }
>(
  'productDetails/fetchProductBySlug',
  async (productId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<IProduct>(
        `/catalog/productDetail/${productId}/`
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
