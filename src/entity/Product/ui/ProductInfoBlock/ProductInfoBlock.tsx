import { type FC } from 'react';
import { useAppSelector } from 'app/providers/StoreProvider';
import { classNames, SkeletonHOC } from 'shared/lib';
import {
  Skeleton,
  BackButton,
  Button,
  EnumTextMode,
  EnumTextSize,
  EnumTextType,
  Text
} from 'shared/ui';
import {
  getProductDetailsData,
  getProductDetailsIsLoading
} from '../../model/selectors/productDetails';
import { ProductSizeSelector } from '../ProductSizeSelector/ProductSizeSelector';
import cls from './ProductInfoBlock.module.scss';

interface IProductInfoBlockProps {
  className?: string;
}

export const ProductInfoBlock: FC<IProductInfoBlockProps> = ({ className }) => {
  const productIsLoading = Boolean(useAppSelector(getProductDetailsIsLoading));
  const product = useAppSelector(getProductDetailsData);
  return (
    <section className={classNames(cls.ProductInfoBlock, {}, [className])}>
      <div className={cls.productInfoWrapper}>
        <SkeletonHOC
          loading={productIsLoading}
          skeleton={<Skeleton height={26} width={140} />}
        >
          <Text tagName={'h1'} size={EnumTextSize.L} type={EnumTextType.TITLE}>
            {product?.name}
          </Text>
        </SkeletonHOC>

        <SkeletonHOC
          loading={productIsLoading}
          skeleton={<Skeleton height={22} width={60} />}
        >
          <Text tagName={'data'} size={EnumTextSize.M}>
            {product?.price.toString() + '₽'}
          </Text>
        </SkeletonHOC>

        <SkeletonHOC
          loading={productIsLoading}
          skeleton={<Skeleton height={100} width={500} />}
        >
          <ProductSizeSelector />
        </SkeletonHOC>

        <SkeletonHOC
          loading={productIsLoading}
          skeleton={<Skeleton height={40} width={135} />}
        >
          <Button className={cls.addToCartButton}>В корзину</Button>
        </SkeletonHOC>

        <SkeletonHOC
          loading={productIsLoading}
          skeleton={<Skeleton height={150} width={550} />}
        >
          <Text size={EnumTextSize.XS} modes={[EnumTextMode.BOLD]}>
            {product?.description}
          </Text>
        </SkeletonHOC>

        <div className={cls.right}>
          <SkeletonHOC
            loading={productIsLoading}
            skeleton={<Skeleton height={48} width={160} />}
          >
            <BackButton />
          </SkeletonHOC>
        </div>
      </div>
    </section>
  );
};
