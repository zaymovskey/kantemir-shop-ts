import { type FC } from 'react';
import { useAppSelector } from 'app/providers/StoreProvider/lib/hooks';
import { classNames } from 'shared/lib';
import { Img, Skeleton, SkeletonHOC } from 'shared/ui';
import {
  getProductDetailsData,
  getProductDetailsIsLoading
} from '../../model/selectors/productDetails';
import cls from './ProductImageBlock.module.scss';

interface IProductImageBlockProps {
  className?: string;
}

export const ProductImageBlock: FC<IProductImageBlockProps> = ({ className }) => {
  const productIsLoading = useAppSelector(getProductDetailsIsLoading);
  const product = useAppSelector(getProductDetailsData);
  return (
    <section className={classNames(cls.ProductImageBlock, {}, [className])}>
      <SkeletonHOC
        loading={Boolean(productIsLoading)}
        skeleton={<Skeleton count={2} width={'100%'} height={800} />}
      >
        {product?.productImages.map(({ image: imagePath }, index) => (
          <div key={`productPhoto_${index}`}>
            <Img
              src={`${_API_URL_}${imagePath}`}
              skeleton={<Skeleton count={2} width={'100%'} height={800} />}
              alt={`Фото товара ${index + 1}`}
            />
          </div>
        ))}
      </SkeletonHOC>
    </section>
  );
};
