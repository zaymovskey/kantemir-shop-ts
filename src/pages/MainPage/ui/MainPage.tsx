import { type FC } from 'react';
import { tabTitle } from 'shared/lib';

const MainPage: FC = () => {
  tabTitle('Главная');
  return <div>Главная</div>;
};

export default MainPage;
