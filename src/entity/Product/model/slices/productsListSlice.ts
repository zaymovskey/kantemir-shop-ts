import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { type IStateScheme } from 'app/providers/StoreProvider';
import { fetchProducts } from '../services/fetchProducts/fetchProducts';
import { type IProduct } from '../types/Product';
import { type IProductsListScheme } from '../types/ProductsListScheme';

const productsAdapter = createEntityAdapter<IProduct>({});

export const getProducts = productsAdapter.getSelectors<IStateScheme>(
  (state) => state.productsList ?? productsAdapter.getInitialState()
);

const productsListSlice = createSlice({
  name: 'productsListSlice',
  initialState: productsAdapter.getInitialState<IProductsListScheme>({
    isLoading: false,
    ids: [],
    entities: {},
    error: ''
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: productsListReducer } = productsListSlice;
