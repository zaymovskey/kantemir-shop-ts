import { type MutableRefObject, useEffect, useRef } from 'react';

export interface IUseInfiniteScroll {
  callback: () => void;
  wrapperRef?: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = <T extends HTMLElement>({
  callback,
  wrapperRef
}: IUseInfiniteScroll): { triggerRef: MutableRefObject<T> } => {
  const triggerRef = useRef() as MutableRefObject<T>;

  useEffect(() => {
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
      if (observer !== null && triggerRef.current !== null) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerRef.current);
      }
    };
  }, [callback, triggerRef, wrapperRef]);

  return { triggerRef };
};
