import { type MutableRefObject, useEffect } from 'react';

export interface IUseInfiniteScroll {
  callback: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef?: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef
}: IUseInfiniteScroll): void => {
  useEffect(() => {
    // TODO: Сделать создание triggerRef здесь и возвращать его

    const options: IntersectionObserverInit = {
      ...(wrapperRef?.current !== undefined && { root: wrapperRef.current }),
      rootMargin: '0px',
      threshold: 1
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerRef.current);

    return () => {
      if (observer !== null) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerRef.current);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
