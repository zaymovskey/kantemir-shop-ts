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
    limit: 8,
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
        productsAdapter.addMany(state, action.payload);
        // TODO: переделать это на бэкенд. Возвращать с бэка количество оставшихся товаров и выводить количество скелетонов по этому значению
        state.hasMore = action.payload.length === state.limit;
      })
      .addCase(fetchProductsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: productsListActions } = productsListSlice;
export const { reducer: productsListReducer } = productsListSlice;
