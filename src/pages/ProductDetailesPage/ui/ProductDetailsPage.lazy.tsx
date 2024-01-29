import { lazy } from 'react';

export const ProductDetailsPageLazy = lazy(
  async () => await import('./ProductDetailsPage')
);
