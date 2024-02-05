import { ProductsList, productsListReducer } from 'entity/Product';
import { type FC } from 'react';
import { DynamicModuleLoader, type TypeReducersList } from 'shared/lib/components';
import { useSetTabTitle } from 'shared/lib/hooks';

const reducers: TypeReducersList = {
  productsList: productsListReducer
};

const MainPage: FC = () => {
  useSetTabTitle('Главная');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProductsList />
    </DynamicModuleLoader>
  );
};

export default MainPage;
