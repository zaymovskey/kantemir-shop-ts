import { type CSSProperties, type FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Skeleton.module.scss';

interface ISkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
  count?: number;
}

export const Skeleton: FC<ISkeletonProps> = ({
  className,
  height,
  width,
  borderRadius = '2px',
  count = 1
}) => {
  const styles: CSSProperties = {
    height,
    width,
    borderRadius
  };

  const counts: number[] = Array.from(Array(count).keys());

  return (
    <>
      {counts.map((count) => (
        <div
          className={classNames(cls.Skeleton, {}, [className])}
          style={styles}
          key={`skeleton_${count}`}
        ></div>
      ))}
    </>
  );
};
