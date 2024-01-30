import { createAsyncThunk } from '@reduxjs/toolkit';
import { type IProduct } from 'entity/Product';
import { type IThunkExtraArg } from 'app/providers/StoreProvider';

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
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  }
);
