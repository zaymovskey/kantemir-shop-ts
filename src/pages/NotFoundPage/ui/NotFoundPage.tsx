import { type FC } from 'react';
import { useSetTabTitle } from 'shared/lib/hooks';
import { classNames } from 'shared/lib/utils/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
  useSetTabTitle('Страница не найдена');
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      Страница не найдена
    </div>
  );
};

export default NotFoundPage;
