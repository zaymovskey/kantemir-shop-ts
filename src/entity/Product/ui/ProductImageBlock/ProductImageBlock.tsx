import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductImageBlock.module.scss';

interface IProductImageBlockProps {
  className?: string;
}

export const ProductImageBlock: FC<IProductImageBlockProps> = ({ className }) => {
  return <div className={classNames(cls.ProductImageBlock, {}, [className])}></div>;
};
