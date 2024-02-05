import { createSlice } from '@reduxjs/toolkit';
import { fetchProductBySlug } from '../services/fetchProductBySlug/fetchProductBySlug';
import { type IProductDetailsScheme } from '../types/ProductDetailsScheme';

const initialState: IProductDetailsScheme = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductBySlug.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: productDetailsActions } = productDetailsSlice;
export const { reducer: productDetailsReducer } = productDetailsSlice;
