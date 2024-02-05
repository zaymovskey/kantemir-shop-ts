import { type EntityState } from '@reduxjs/toolkit';
import { type IProduct } from 'entity/Product';

export interface IProductsListScheme extends EntityState<IProduct, number> {
  isLoading: boolean;
  error?: string;
}
