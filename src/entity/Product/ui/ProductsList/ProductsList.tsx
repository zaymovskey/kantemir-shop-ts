import { type FC } from 'react';
import { classNames } from 'shared/lib';
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
        <ProductsListItem key={`productListItem_${index}`} />
      ))}
    </div>
  );
};
