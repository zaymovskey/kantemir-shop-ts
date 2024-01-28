import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      Страница не найдена
    </div>
  );
};

export default NotFoundPage;
