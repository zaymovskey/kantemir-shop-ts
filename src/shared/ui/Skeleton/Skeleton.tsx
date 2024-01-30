import { type CSSProperties, type FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Skeleton.module.scss';

interface ISkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const Skeleton: FC<ISkeletonProps> = ({
  className,
  height,
  width,
  borderRadius = '2px'
}) => {
  const styles: CSSProperties = {
    height,
    width,
    borderRadius
  };

  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={styles}></div>
  );
};
