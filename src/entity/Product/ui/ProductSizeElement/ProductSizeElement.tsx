import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProductSizeElement.module.scss';

export enum EnumProductSizeElementSize {
  M = 'size-m'
}

interface IProductSizeElementProps {
  className?: string;
  size: EnumProductSizeElementSize;
  text: string;
  selected: boolean;
}

export const ProductSizeElement: FC<IProductSizeElementProps> = ({
  className,
  size = EnumProductSizeElementSize.M,
  text,
  selected
}) => {
  return (
    <li
      className={classNames(cls.ProductSizeElement, { [cls.selected]: selected }, [
        className,
        cls[size]
      ])}
    >
      {text}
    </li>
  );
};
