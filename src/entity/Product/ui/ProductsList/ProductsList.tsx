import { ProductsListItem, fetchProductsList } from 'entity/Product';
import { getProductsListIsLoading } from 'entity/Product/model/selectors/productsList';
import { getProducts } from 'entity/Product/model/slices/productsListSlice';
import { type FC, type MutableRefObject, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib';
import { useInfiniteScroll } from 'shared/lib/hooks';
import { Skeleton } from 'shared/ui';
import cls from './ProductsList.module.scss';

interface IProductsListProps {
  className?: string;
}

export const ProductsList: FC<IProductsListProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts.selectAll);
  const productsIsLoading = Boolean(useAppSelector(getProductsListIsLoading));

  useEffect(() => {
    dispatch(fetchProductsList({}));
  }, [dispatch]);

  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  useInfiniteScroll({
    callback: () => {
      console.log('intersected');
    },
    triggerRef
  });

  return (
    <div className={classNames(cls.ProductsList, {}, [className])}>
      {productsIsLoading ? (
        <div className={classNames(cls.ProductsList, {}, [className])}>
          <Skeleton width={'100%'} height={400} count={8} />
        </div>
      ) : (
        products?.map((product, index) => (
          <ProductsListItem product={product} key={`productListItem_${index}`} />
        ))
      )}
      <div ref={triggerRef} />
    </div>
  );
};
