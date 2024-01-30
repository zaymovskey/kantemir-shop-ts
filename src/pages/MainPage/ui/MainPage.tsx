import { type FC } from 'react';
import { Skeleton } from 'shared/ui';

const MainPage: FC = () => {
  return (
    <div>
      <Skeleton height={400} width={400} />
    </div>
  );
};

export default MainPage;
