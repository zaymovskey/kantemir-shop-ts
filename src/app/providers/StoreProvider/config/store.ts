import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore';
import { $api } from 'shared/api';
import { type IReducerManager, type IStateScheme } from '../config/StateScheme';
import { createReducerManager } from './reducerManager';

interface IMyEnhancedStore extends EnhancedStore<IStateScheme, any, any> {
  reducerManager: IReducerManager;
}

export function createReduxStore(initialState?: IStateScheme): IMyEnhancedStore {
  const rootReducers: ReducersMapObject<IStateScheme> = {};

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<IStateScheme>({
    reducer: reducerManager.reduce,
    devTools: _IS_DEV_,
    preloadedState: initialState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api
          }
        }
      })
  });

  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<typeof createReduxStore>['getState'];
