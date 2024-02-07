import { type FC, type ReactNode } from 'react';
import { classNames } from 'shared/lib';
import { Skeleton } from 'shared/ui';
import { type IProduct } from '../../model/types/Product';
import { ProductsListItem } from '../ProductsListItem/ProductsListItem';
import cls from './ProductsList.module.scss';

interface IProductsListProps {
  className?: string;
  products: IProduct[];
  productsIsLoading?: boolean;
}

const getSkeleton = (count: number): ReactNode => {
  return <Skeleton width={'100%'} height={400} count={count} />;
};

export const ProductsList: FC<IProductsListProps> = ({
  className,
  products,
  productsIsLoading = true
}) => {
  const renderProduct = (product: IProduct, index: number): ReactNode => (
    <ProductsListItem product={product} key={`productListItem_${index}`} />
  );

  return (
    <div className={classNames(cls.ProductsList, {}, [className])}>
      {products.length > 0 ? products.map(renderProduct) : null}
      {productsIsLoading && getSkeleton(products.length >= 8 ? 4 : 8)}
    </div>
  );
};
