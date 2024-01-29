import type { Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import { type AxiosInstance } from 'axios';
import { type IProductDetailsScheme } from 'entity/Product/model/types/ProductDetailsScheme';
export interface IStateScheme {
  // Async reducers
  productDetails?: IProductDetailsScheme;
}

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateScheme>;
  reduce: (state: any, action: UnknownAction) => IStateScheme;
  add: (key: keyof IStateScheme, reducer: Reducer) => void;
  remove: (key: keyof IStateScheme) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<IStateScheme> {
  reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}
