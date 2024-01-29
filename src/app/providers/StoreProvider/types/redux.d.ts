import { type IReducerManager } from '../config/StateScheme';

declare module 'redux' {
  export interface Store {
    reducerManager: IReducerManager;
  }
}
