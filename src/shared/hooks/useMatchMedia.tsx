'use client';

import { useState, useLayoutEffect } from 'react';
import { MEDIA_SIZES } from '../enums/insex';

type TBreakpoints = 'isMobile' | 'isTablet' | 'isDesktop';

type TMatchMediaResult = Record<TBreakpoints, boolean | null>;

export function useMatchMedia(): TMatchMediaResult {
  const [result, setResult] = useState<TMatchMediaResult>({
    isMobile: null,
    isTablet: null,
    isDesktop: null,
  });

  useLayoutEffect(() => {
    const queries: Record<TBreakpoints, MediaQueryList> = {
      isMobile: matchMedia(`(max-width: ${MEDIA_SIZES.TABLET - 1}px)`),
      isTablet: matchMedia(`(min-width: ${MEDIA_SIZES.TABLET}px)
        and (max-width: ${MEDIA_SIZES.DESKTOP - 1}px)`),
      isDesktop: matchMedia(`(min-width: ${MEDIA_SIZES.DESKTOP}px)`),
    };

    const getResult = (): TMatchMediaResult => {
      return Object.fromEntries(
        Object
          .entries(queries)
          .map((item) => {
            return [
              item[0],
              item[1].matches,
            ];
          }),
      ) as TMatchMediaResult;
    };

    setResult(getResult());

    const onChange = (event: MediaQueryListEvent): void => {
      if (event.matches) setResult(getResult());
    };

    Object.values(queries).forEach((query) => {
      query.addEventListener('change', onChange);
    });

    return () => {
      Object.values(queries).forEach((query) => {
        query.removeEventListener('change', onChange);
      });
    };
  }, []);

  return result;
}
