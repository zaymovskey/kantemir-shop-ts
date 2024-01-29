import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProductDetailsPage } from 'pages/ProductDetailesPage';

export enum EnumAppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not_found',
  PRODUCT_DETAILS = 'product_details'
}

export const RoutePath: Record<EnumAppRoutes, string> = {
  [EnumAppRoutes.MAIN]: '/',
  [EnumAppRoutes.PRODUCT_DETAILS]: '/product/', // + :slug

  [EnumAppRoutes.NOT_FOUND]: '*'
};

export const RouteConfig: Record<EnumAppRoutes, RouteProps> = {
  [EnumAppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [EnumAppRoutes.PRODUCT_DETAILS]: {
    path: RoutePath.product_details,
    element: <ProductDetailsPage />
  },

  [EnumAppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
