import { ProductsList } from 'entity/Product/ui/ProductsList/ProductsList';
import { ProductsListItem } from 'entity/Product/ui/ProductsListItem/ProductsListItem';
import { productDetailsReducer } from './model/slice/productDetailsSlice';
import { type IProduct } from './model/types/Product';
import { ProductDetails } from './ui/ProductDetails/ProductDetails';

export {
  ProductDetails,
  ProductsListItem,
  ProductsList,
  type IProduct,
  productDetailsReducer
};
