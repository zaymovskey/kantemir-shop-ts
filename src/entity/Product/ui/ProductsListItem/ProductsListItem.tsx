import { type FC } from 'react';
import { classNames } from 'shared/lib';
import { type IProduct } from '../../model/types/Product';
import cls from './ProductsListItem.module.scss';

interface IProductsListItemProps {
  className?: string;
  product?: IProduct;
}

export const ProductsListItem: FC<IProductsListItemProps> = ({ className }) => {
  return (
    <article className={classNames(cls.ProductsListItem, {}, [className])}>
      <a href='#' className={cls.ProductsListItem__main} rel='details'>
        <div className={cls.ProductsListItem__info}>
          <h2>Product 1</h2>
          <data>123₽</data>
        </div>
        <div className={cls.ProductsListItem__image}>
          <img
            src='https://kantemirdesign.com/media/products/c2ef9d5f7f0a624bec7eec1bc4baa61f99dbe345_original_jbPctcE.jpeg'
            alt='Фото'
          />
        </div>
      </a>
    </article>
  );
};
