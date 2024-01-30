import { type FC } from 'react';
import { useAppSelector } from 'app/providers/StoreProvider/lib/hooks';
import { classNames } from 'shared/lib';
import { Skeleton, SkeletonHOC } from 'shared/ui';
import {
  getProductDetailsData,
  getProductDetailsIsLoading
} from '../../model/selectors/productDetails';
import cls from './ProductImageBlock.module.scss';

interface IProductImageBlockProps {
  className?: string;
}

export const ProductImageBlock: FC<IProductImageBlockProps> = ({ className }) => {
  const isLoading = useAppSelector(getProductDetailsIsLoading);
  const product = useAppSelector(getProductDetailsData);
  return (
    <section className={classNames(cls.ProductImageBlock, {}, [className])}>
      <SkeletonHOC
        loading={Boolean(isLoading)}
        skeleton={<Skeleton count={2} width={'100%'} height={800} />}
      >
        {product?.images.map((image, index) => (
          <div key={index}>
            <img
              src='https://img.joomcdn.net/c2ef9d5f7f0a624bec7eec1bc4baa61f99dbe345_original.jpeg'
              alt=''
            />
          </div>
        ))}
      </SkeletonHOC>
    </section>
  );
};
