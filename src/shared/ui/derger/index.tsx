import cx from 'classix';
import type { HTMLProps } from 'react';
import { forwardRef } from 'react';
import DOMPurify from 'isomorphic-dompurify';

/**
 * компонент для вставки html тэгов
 */
export const DangerouslyInnerHTML: FCClass<HTMLProps<HTMLDivElement>> = forwardRef(
  ({ className, children, ...props }, ref) => {
    if (typeof children === 'string') {
      return (
        <span
          {...props}
          className={cx('block', className)}
          ref={ref}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }}
        />
      );
    }

    return null;
  },
);
