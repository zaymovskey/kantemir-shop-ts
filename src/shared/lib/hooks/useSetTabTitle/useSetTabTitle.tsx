import { useEffect } from 'react';

export const useSetTabTitle = (tabTitle: string): void => {
  useEffect(() => {
    document.title = tabTitle;
  }, [tabTitle]);
};
