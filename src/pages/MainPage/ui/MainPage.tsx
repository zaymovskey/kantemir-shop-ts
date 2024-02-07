import {
  fetchProductsList,
  getProductsListIsLoading,
  ProductsList,
  productsListReducer,
  getProducts,
  fetchNextProductsListPart,
  getProductsListLimit
} from 'entity/Product';
import { type FC, useCallback, useEffect } from 'react';
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
  const productsListIsLoading = Boolean(useAppSelector(getProductsListIsLoading));
  const productsListLimit = useAppSelector(getProductsListLimit);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProductsList({}));
    }
  }, [dispatch, products.length]);

  const onLoadNextPart = useCallback(() => {
    if (products.length >= productsListLimit) {
      dispatch(fetchNextProductsListPart());
    }
  }, [dispatch, products.length, productsListLimit]);

  const { triggerRef } = useInfiniteScroll<HTMLDivElement>({
    callback: onLoadNextPart
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <ProductsList products={products} productsIsLoading={productsListIsLoading} />
      <div ref={triggerRef} />
    </DynamicModuleLoader>
  );
};

export default MainPage;
