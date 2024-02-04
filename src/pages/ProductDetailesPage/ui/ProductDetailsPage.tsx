import { ProductDetails } from 'entity/Product';
import { ProductNotFound } from 'entity/Product/ui/ProductNotFound/ProductNotFound';
import { type FC } from 'react';
import { useParams } from 'react-router-dom';
import { capitalizeFirstLetter, tabTitle } from 'shared/lib';

const ProductDetailsPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();

  tabTitle(capitalizeFirstLetter(`${slug}`));

  if (slug == null) {
    return <ProductNotFound />;
  }

  return <ProductDetails slug={slug} />;
};

export default ProductDetailsPage;
