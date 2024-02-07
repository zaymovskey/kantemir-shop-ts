import {
  getProductsListError,
  getProductsListIsLoading,
  getProductsListLimit
} from './model/selectors/productsList';
import { fetchNextProductsListPart } from './model/services/fetchNextProductsListPart/fetchNextProductsListPart';
import { fetchProductsList } from './model/services/fetchProductsList/fetchProductsList';
import { productDetailsReducer } from './model/slices/productDetailsSlice';
import { getProducts, productsListReducer } from './model/slices/productsListSlice';
import { type IProduct } from './model/types/Product';
import { type IProductDetailsScheme } from './model/types/ProductDetailsScheme';
import { type IProductsListScheme } from './model/types/ProductsListScheme';
import { ProductDetails } from './ui/ProductDetails/ProductDetails';
import { ProductNotFound } from './ui/ProductNotFound/ProductNotFound';
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
  fetchProductsList,
  ProductNotFound,
  getProducts,
  fetchNextProductsListPart,
  getProductsListLimit
};
