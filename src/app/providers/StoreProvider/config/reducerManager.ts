import type { Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import type { IReducerManager, IStateScheme } from './StateScheme';

export function createReducerManager(
  initialReducers: ReducersMapObject<IStateScheme>
): IReducerManager {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: Array<keyof IStateScheme> = [];
  return {
    getReducerMap: () => reducers,

    reduce: (state: any, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state[key];
        }
        keysToRemove = [];
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return combinedReducer(state, action);
    },

    add: (key: keyof IStateScheme, reducer: Reducer) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: keyof IStateScheme) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!key || !reducers[key]) {
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    }
  };
}
