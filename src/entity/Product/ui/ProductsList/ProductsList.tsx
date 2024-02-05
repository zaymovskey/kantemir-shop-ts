import { ProductsListItem, fetchProducts } from 'entity/Product';
import { getProductsListIsLoading } from 'entity/Product/model/selectors/productsList';
import { getProducts } from 'entity/Product/model/slices/productsListSlice';
import { type FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { classNames, SkeletonHOC } from 'shared/lib';
import { Skeleton } from 'shared/ui';
import cls from './ProductsList.module.scss';

interface IProductsListProps {
  className?: string;
}

export const ProductsList: FC<IProductsListProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts.selectAll);
  const productsIsLoading = useAppSelector(getProductsListIsLoading);

  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProductsList, {}, [className])}>
      {products?.map((product, index) => (
        <SkeletonHOC
          key={`productListItem_${index}`}
          loading={Boolean(productsIsLoading)}
          skeleton={<Skeleton width={'100%'} height={400} />}
        >
          <ProductsListItem product={product} />
        </SkeletonHOC>
      ))}
    </div>
  );
};
