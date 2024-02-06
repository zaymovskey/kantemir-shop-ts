import { ProductsList, productsListReducer } from 'entity/Product';
import { type FC, type MutableRefObject, useRef } from 'react';
import { DynamicModuleLoader, type TypeReducersList } from 'shared/lib/components';
import { useSetTabTitle, useInfiniteScroll } from 'shared/lib/hooks';

const reducers: TypeReducersList = {
  productsList: productsListReducer
};

const MainPage: FC = () => {
  useSetTabTitle('Главная');

  return (
    <div>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <ProductsList />
      </DynamicModuleLoader>
    </div>
  );
};

export default MainPage;
