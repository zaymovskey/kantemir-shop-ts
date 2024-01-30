import { type FC, useEffect } from 'react';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader, type TypeReducersList } from 'shared/lib/components';
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

  useEffect(() => {
    dispatch(fetchProductBySlug(slug));
  }, [dispatch, slug]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ProductDetails, {}, [className])}>
        <ProductImageBlock className={cls.ProductDetails__section} />
        <ProductInfoBlock className={cls.ProductDetails__section} />
      </div>
    </DynamicModuleLoader>
  );
};
