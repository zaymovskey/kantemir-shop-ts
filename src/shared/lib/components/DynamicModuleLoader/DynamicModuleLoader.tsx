import { type Reducer } from '@reduxjs/toolkit';
import { type FC, type ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
  type IStateScheme,
  type ReduxStoreWithManager
} from 'app/providers/StoreProvider/config/StateScheme';

export type TypeReducersList = {
  [name in keyof IStateScheme]?: Reducer;
};

type TypeReducersListEntry = [keyof IStateScheme, Reducer];
interface IDynamicModuleLoader {
  children: ReactNode;
  reducers: TypeReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IDynamicModuleLoader> = ({
  children,
  reducers,
  removeAfterUnmount = true
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]: TypeReducersListEntry) => {
      store.reducerManager.add(keyName, reducer);
      dispatch({ type: `@INIT ${keyName} reducer` });
    });

    return () => {
      if (!removeAfterUnmount) return;

      Object.entries(reducers).forEach(([keyName, reducer]: TypeReducersListEntry) => {
        store.reducerManager.remove(keyName);
        dispatch({ type: `@DESTROY ${keyName} reducer` });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};
