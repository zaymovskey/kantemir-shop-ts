import { type FC } from 'react';
import { classNames, SkeletonHOC } from 'shared/lib';
import { Skeleton } from 'shared/ui';
import { type IProduct } from '../../model/types/Product';
import { ProductsListItem } from '../ProductsListItem/ProductsListItem';
import cls from './ProductsList.module.scss';

interface IProductsListProps {
  className?: string;
  products?: IProduct[];
}

export const ProductsList: FC<IProductsListProps> = ({ className, products }) => {
  const fdsaf = [1, 2, 3, 4, 5];
  return (
    <div className={classNames(cls.ProductsList, {}, [className])}>
      {fdsaf?.map((product, index) => (
        <SkeletonHOC
          key={`productListItem_${index}`}
          loading={false}
          skeleton={<Skeleton width={'100%'} height={400} />}
        >
          <ProductsListItem />
        </SkeletonHOC>
      ))}
    </div>
  );
};