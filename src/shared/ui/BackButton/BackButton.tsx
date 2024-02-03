import { type FC } from 'react';
import { ArrowRightIcon } from 'shared/assets/icons';
import cls from './BackButton.module.scss';

interface IBackButtonProps {
  className?: string;
}

export const BackButton: FC<IBackButtonProps> = ({ className }) => {
  return (
    <button className={cls.BackButton}>
      <ArrowRightIcon />
      <p>Back</p>
    </button>
  );
};
