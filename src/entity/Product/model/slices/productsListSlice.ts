import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchProductsList } from 'entity/Product/model/services/fetchProductsList/fetchProductsList';
import { type IStateScheme } from 'app/providers/StoreProvider';
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
    error: '',
    offset: 0,
    limit: 3,
    hasMore: true
  }),
  reducers: {
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.isLoading = false;
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchProductsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: productsListReducer } = productsListSlice;
