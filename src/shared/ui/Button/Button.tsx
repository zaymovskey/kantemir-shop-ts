import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/utils/classNames/classNames';
import cls from './Button.module.scss';

export enum EnumButtonTheme {
  PRIMARY = 'primary'
}

export enum EnumButtonSize {
  M = 'size-m'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EnumButtonTheme;
  size?: EnumButtonSize;
  loading?: boolean;
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  theme = EnumButtonTheme.PRIMARY,
  size = EnumButtonSize.M,
  loading = false,
  ...defaultButtonProps
}) => {
  const mods: Record<string, boolean> = {
    [cls.loading]: loading
  };
  const additional: string[] = [cls[theme], cls[size]];

  return (
    <button
      className={classNames(cls.Button, mods, [className, ...additional])}
      {...defaultButtonProps}
    >
      <div className={cls.children}>{children}</div>
    </button>
  );
};
