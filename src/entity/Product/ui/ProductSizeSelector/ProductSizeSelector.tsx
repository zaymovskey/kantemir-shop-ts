import {
  EnumProductSizeElementSize,
  ProductSizeElement
} from 'entity/Product/ui/ProductSizeElement/ProductSizeElement';
import { type FC } from 'react';
import { classNames } from 'shared/lib';
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
