import {
  fetchProductsList,
  getProductsListIsLoading,
  ProductsList,
  productsListReducer,
  getProducts,
  fetchNextProductsListPart
} from 'entity/Product';
import { type FC, type MutableRefObject, useCallback, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { DynamicModuleLoader, type TypeReducersList } from 'shared/lib/components';
import { useInfiniteScroll, useSetTabTitle } from 'shared/lib/hooks';

const reducers: TypeReducersList = {
  productsList: productsListReducer
};

const MainPage: FC = () => {
  useSetTabTitle('Главная');

  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts.selectAll);
  const productsIsLoading = Boolean(useAppSelector(getProductsListIsLoading));

  useEffect(() => {
    dispatch(fetchProductsList({}));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextProductsListPart());
  }, [dispatch]);

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  useInfiniteScroll({
    callback: onLoadNextPart,
    triggerRef
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProductsList products={products} productsIsLoading={productsIsLoading} />
      <div ref={triggerRef} />
    </DynamicModuleLoader>
  );
};

export default MainPage;
