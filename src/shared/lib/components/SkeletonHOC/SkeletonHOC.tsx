import { type FC, type ReactNode } from 'react';

interface ISkeletonHOCProps {
  children: ReactNode;
  loading: boolean;
  skeleton: ReactNode;
}
export const SkeletonHOC: FC<ISkeletonHOCProps> = ({
  children,
  loading = false,
  skeleton
}) => {
  return loading ? skeleton : children;
};
