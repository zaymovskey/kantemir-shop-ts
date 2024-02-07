import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { Img, Skeleton } from 'shared/ui';
import { type IProduct } from '../../model/types/Product';
import cls from './ProductsListItem.module.scss';

interface IProductsListItemProps {
  className?: string;
  product: IProduct;
}

export const ProductsListItem: FC<IProductsListItemProps> = ({
  className,
  product
}) => {
  return (
    <article className={classNames(cls.ProductsListItem, {}, [className])}>
      <Link
        to={`/product/${product.slug}`}
        className={cls.ProductsListItem__main}
        rel='details'
      >
        <div className={cls.ProductsListItem__info}>
          <h2>{product.name}</h2>
          <data>{product.price}₽</data>
        </div>
        <div className={cls.ProductsListItem__image}>
          <Img
            src={`${_API_URL_}${product.main_image}`}
            skeleton={<Skeleton width={'100%'} height={400} />}
          />
        </div>
      </Link>
    </article>
  );
};
