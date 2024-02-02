import { type FC } from 'react';
import { classNames } from 'shared/lib';
import {
  EnumProductSizeElementSize,
  ProductSizeElement
} from '../ProductSizeElement/ProductSizeElement';
import cls from './ProductSizeSelector.module.scss';

interface IProductSizeSelectorProps {
  className?: string;
}

export const ProductSizeSelector: FC<IProductSizeSelectorProps> = ({ className }) => {
  return (
    <ul className={classNames(cls.ProductSizeSelector, {}, [className])}>
      <ProductSizeElement
        size={EnumProductSizeElementSize.M}
        selected={false}
        text={'S'}
      />
      <ProductSizeElement
        size={EnumProductSizeElementSize.M}
        selected={false}
        text={'M'}
      />
      <ProductSizeElement
        size={EnumProductSizeElementSize.M}
        selected={false}
        text={'L'}
      />
    </ul>
  );
};
