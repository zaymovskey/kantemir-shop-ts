import { type FC, useEffect } from 'react';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { useAppSelector } from 'app/providers/StoreProvider/lib/hooks';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader, type TypeReducersList } from 'shared/lib/components';
import { SkeletonHOC } from 'shared/lib/components/SkeletonHOC/SkeletonHOC';
import {
  getProductDetailsData,
  getProductDetailsError,
  getProductDetailsIsLoading
} from '../../model/selectors/productDetails';
import { fetchProductBySlug } from '../../model/services/fetchProductBySlug/fetchProductBySlug';
import { productDetailsReducer } from '../../model/slice/productDetailsSlice';
import { ProductImageBlock } from '../ProductImageBlock/ProductImageBlock';
import { ProductInfoBlock } from '../ProductInfoBlock/ProductInfoBlock';
import cls from './ProductDetails.module.scss';

interface IProductDetailsProps {
  className?: string;
  slug: string;
}

const reducers: TypeReducersList = {
  productDetails: productDetailsReducer
};

export const ProductDetails: FC<IProductDetailsProps> = ({ className, slug }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getProductDetailsIsLoading);
  const product = useAppSelector(getProductDetailsData);
  const error = useAppSelector(getProductDetailsError);

  useEffect(() => {
    dispatch(fetchProductBySlug(slug));
  }, [dispatch, slug]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ProductDetails, {}, [className])}>
        <section className={cls.ProductDetails__section}>
          <SkeletonHOC loading={Boolean(isLoading)} skeleton={<>Загрузка</>}>
            <ProductImageBlock />
          </SkeletonHOC>
        </section>
        <section className={cls.ProductDetails__section}>
          <SkeletonHOC loading={Boolean(isLoading)} skeleton={<>Загрузка</>}>
            <ProductInfoBlock />
          </SkeletonHOC>
        </section>
      </div>
    </DynamicModuleLoader>
  );
};
