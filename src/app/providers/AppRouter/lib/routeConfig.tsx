import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum EnumAppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<EnumAppRoutes, string> = {
  [EnumAppRoutes.MAIN]: '/',

  [EnumAppRoutes.NOT_FOUND]: '*'
};

export const RouteConfig: Record<EnumAppRoutes, RouteProps> = {
  [EnumAppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },

  [EnumAppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
