import { ProductsList } from 'entity/Product';
import { type FC } from 'react';
import { useSetTabTitle } from 'shared/lib/hooks';

const MainPage: FC = () => {
  useSetTabTitle('Главная');

  return (
    <div>
      <ProductsList />
    </div>
  );
};

export default MainPage;
