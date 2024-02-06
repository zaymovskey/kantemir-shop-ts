import { fetchProductsList } from 'entity/Product/model/services/fetchProductsList/fetchProductsList';
import {
  getProductsListError,
  getProductsListIsLoading
} from './model/selectors/productsList';
import { productDetailsReducer } from './model/slices/productDetailsSlice';
import { productsListReducer } from './model/slices/productsListSlice';
import { type IProduct } from './model/types/Product';
import { type IProductDetailsScheme } from './model/types/ProductDetailsScheme';
import { type IProductsListScheme } from './model/types/ProductsListScheme';
import { ProductDetails } from './ui/ProductDetails/ProductDetails';
import { ProductsList } from './ui/ProductsList/ProductsList';
import { ProductsListItem } from './ui/ProductsListItem/ProductsListItem';

export {
  ProductDetails,
  ProductsListItem,
  ProductsList,
  type IProduct,
  productDetailsReducer,
  type IProductDetailsScheme,
  type IProductsListScheme,
  productsListReducer,
  getProductsListIsLoading,
  getProductsListError,
  fetchProductsList
};
