import { ProductSizeSelector } from 'entity/Product/ui/ProductSizeSelector/ProductSizeSelector';
import { type FC } from 'react';
import { useAppSelector } from 'app/providers/StoreProvider/lib/hooks';
import { classNames } from 'shared/lib';
import { SkeletonHOC } from 'shared/lib/components/SkeletonHOC/SkeletonHOC';
import { Skeleton } from 'shared/ui';
import { BackButton } from 'shared/ui/BackButton/BackButton';
import { Button } from 'shared/ui/Button/Button';
import { EnumTextMode, EnumTextSize, EnumTextType, Text } from 'shared/ui/Text/Text';
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
    <section className={classNames(cls.ProductInfoBlock, {}, [className])}>
      <div className={cls.productInfoWrapper}>
        <SkeletonHOC
          loading={Boolean(isLoading)}
          skeleton={<Skeleton height={44} width={140} />}
        >
          <Text tagName={'h1'} size={EnumTextSize.L} type={EnumTextType.TITLE}>
            {product?.name}
          </Text>
        </SkeletonHOC>

        <SkeletonHOC
          loading={Boolean(isLoading)}
          skeleton={<Skeleton height={32} width={60} />}
        >
          <Text tagName={'data'} size={EnumTextSize.S}>
            {product?.price.toString() + '₽'}
          </Text>
        </SkeletonHOC>

        <SkeletonHOC
          loading={Boolean(isLoading)}
          skeleton={<Skeleton height={100} width={500} />}
        >
          <ProductSizeSelector />
        </SkeletonHOC>

        <SkeletonHOC
          loading={Boolean(isLoading)}
          skeleton={<Skeleton height={40} width={135} />}
        >
          <Button className={cls.addToCartButton}>В корзину</Button>
        </SkeletonHOC>

        <SkeletonHOC
          loading={Boolean(isLoading)}
          skeleton={<Skeleton height={150} width={550} />}
        >
          <Text size={EnumTextSize.XS} modes={[EnumTextMode.BOLD]}>
            {product?.description}
          </Text>
        </SkeletonHOC>

        <div className={cls.right}>
          <BackButton />
        </div>
      </div>
    </section>
  );
};
