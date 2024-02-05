import { type FC } from 'react';
import { classNames } from 'shared/lib';
import { type IProduct } from '../../model/types/Product';
import cls from './ProductsListItem.module.scss';

interface IProductsListItemProps {
  className?: string;
  product?: IProduct;
}

export const ProductsListItem: FC<IProductsListItemProps> = ({
  className,
  product
}) => {
  return (
    <article className={classNames(cls.ProductsListItem, {}, [className])}>
      <a href='#' className={cls.ProductsListItem__main} rel='details'>
        <div className={cls.ProductsListItem__info}>
          <h2>{product?.name}</h2>
          <data>{product?.price}₽</data>
        </div>
        <div className={cls.ProductsListItem__image}>
          <img src={`${_API_URL_}${product?.main_image}`} alt='Фото' />
        </div>
      </a>
    </article>
  );
};
