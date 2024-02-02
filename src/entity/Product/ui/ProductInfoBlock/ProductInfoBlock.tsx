import { ProductSizeSelector } from 'entity/Product/ui/ProductSizeSelector/ProductSizeSelector';
import { type FC } from 'react';
import { useAppSelector } from 'app/providers/StoreProvider/lib/hooks';
import { classNames } from 'shared/lib';
import { SkeletonHOC } from 'shared/lib/components/SkeletonHOC/SkeletonHOC';
import { Skeleton } from 'shared/ui';
import { Button } from 'shared/ui/Button/Button';
import { EnumTextSize, EnumTextType, Text } from 'shared/ui/Text/Text';
import {
  getProductDetailsData,
  getProductDetailsIsLoading
} from '../../model/selectors/productDetails';
import cls from './ProductInfoBlock.module.scss';

interface IProductInfoBlockProps {
  className?: string;
}

export const ProductInfoBlock: FC<IProductInfoBlockProps> = ({ className }) => {
  const isLoading = useAppSelector(getProductDetailsIsLoading);
  const product = useAppSelector(getProductDetailsData);
  return (
    <section className={classNames(cls.ProductImageBlock, {}, [className])}>
      <SkeletonHOC
        loading={Boolean(isLoading)}
        skeleton={<Skeleton count={2} width={'100%'} height={800} />}
      >
        <Text tagName={'h1'} size={EnumTextSize.L} type={EnumTextType.TITLE}>
          {product?.name}
        </Text>
        <Text tagName={'data'} size={EnumTextSize.S}>
          {product?.price.toString() + '₽'}
        </Text>
        <ProductSizeSelector />
        <Button>В корзину</Button>
      </SkeletonHOC>
    </section>
  );
};
