import { type FC } from 'react';
import { useSetTabTitle } from 'shared/lib/hooks';

const MainPage: FC = () => {
  useSetTabTitle('Главная');

  return <div>Главная</div>;
};

export default MainPage;
