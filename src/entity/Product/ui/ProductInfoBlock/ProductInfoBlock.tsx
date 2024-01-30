import { type FC } from 'react';
import { useAppSelector } from 'app/providers/StoreProvider/lib/hooks';
import { classNames } from 'shared/lib';
import { SkeletonHOC } from 'shared/lib/components/SkeletonHOC/SkeletonHOC';
import { Skeleton } from 'shared/ui';
import { getProductDetailsIsLoading } from '../../model/selectors/productDetails';
import cls from './ProductInfoBlock.module.scss';

interface IProductInfoBlockProps {
  className?: string;
}

export const ProductInfoBlock: FC<IProductInfoBlockProps> = ({ className }) => {
  const isLoading = useAppSelector(getProductDetailsIsLoading);
  return (
    <section className={classNames(cls.ProductImageBlock, {}, [className])}>
      <SkeletonHOC
        loading={Boolean(isLoading)}
        skeleton={<Skeleton count={2} width={'100%'} height={800} />}
      >
        Информация о товаре
      </SkeletonHOC>
    </section>
  );
};
