import { type FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './ProductInfoBlock.module.scss';

interface IProductInfoBlockProps {
  className?: string;
}

export const ProductInfoBlock: FC<IProductInfoBlockProps> = ({ className }) => {
  return <div className={classNames(cls.ProductInfoBlock, {}, [className])}></div>;
};
