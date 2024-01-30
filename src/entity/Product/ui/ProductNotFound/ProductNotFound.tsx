import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductNotFound.module.scss';

interface IProductNotFoundProps {
  className?: string;
}

export const ProductNotFound: FC<IProductNotFoundProps> = ({ className }) => {
  return (
    <div className={classNames(cls.ProductNotFound, {}, [className])}>
      Продукт не найден
    </div>
  );
};
