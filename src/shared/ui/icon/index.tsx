import cx from 'classix'
import React, { forwardRef } from 'react'
import type { IconsArray } from '../../enums/icons'

export interface IIconProps {
  className?: string;
  /** Название иконки */
  icon: IconsArray | `${IconsArray}`;
  /** Ширина иконки */
  width?: number | string;
  /** Высота иконки */
  height?: number | string;
  /** аттрибут стилей */
  style?: React.CSSProperties;
}

type Ref = SVGSVGElement;

export type TIcon = IIconProps & React.SVGProps<SVGSVGElement>;

export const Icon = forwardRef<Ref, TIcon>(({
  className,
  icon,
  width = 24,
  height = 24,
  style,
  ...otherProps
}, ref) => (
  <svg
    ref={ref}
    className={cx('inline-block shrink-0 align-top', className)}
    width={width}
    height={height}
    style={style}
    data-icon={icon}
    {...otherProps}
  >
    <use href={`/icons/sprite.svg#${icon}`} />
  </svg>
));

Icon.displayName = 'Icon';
