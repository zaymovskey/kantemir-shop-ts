import { productDetailsReducer } from 'entity/Product';
import { fetchProductBySlug } from 'entity/Product/model/services/fetchProductBySlug/fetchProductBySlug';
import { type FC, useEffect } from 'react';
import { useAppDispatch } from 'app/providers/StoreProvider/lib/hooks';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  type TypeReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ProductDetails.module.scss';

interface IProductDetailsProps {
  className?: string;
}

const reducers: TypeReducersList = {
  productDetails: productDetailsReducer
};

export const ProductDetails: FC<IProductDetailsProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductBySlug('plate'));
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ProductDetails, {}, [className])}>Продукт</div>
    </DynamicModuleLoader>
  );
};
