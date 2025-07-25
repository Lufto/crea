
import type { IconsArray } from '@/shared/enums/icons'
import cx from 'classix'
import { Icon } from '../icon'

type TButton = {
  onClick?: () => void;
  icon?: IconsArray;
  iconSize?: IconType;
  disabled?: boolean;
  typography?: string
};

enum IconType {
  default = 'w-2.5 h-5',
}

export const Button: FCClass<TButton> = ({
  className,
  icon,
  iconSize = IconType.default,
  children,
  onClick,
  disabled,
  typography = 'h4',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
			type = 'button'
      className={cx('py-4.5 px-10.5 bg-linear-to-r from-gradient-orange-1 to-gradient-orange-2 text-white-100 rounded-full', className, typography)}
    >
      {children}

      {icon &&
        <Icon
          icon={icon}
          className={cx(iconSize)}
        />
      }
    </button>
  );
};
