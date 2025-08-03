
import type { IconsArray } from '@/shared/enums/icons'
import cx from 'classix'
import { Icon } from '../icon'
import { motion } from 'motion/react';

type TButton = {
  onClick?: () => void;
  icon?: IconsArray;
  iconSize?: IconType;
  type?: "submit" | "button" | "reset",
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
  type = 'button',
  onClick,
  disabled,
  typography = 'h4',
}) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cx(
        'relative w-fit py-3 px-7 bg-gradient-to-r from-gradient-orange-1 to-gradient-orange-2 text-white-100 rounded-full',
        'd:py-4.5 d:px-10.5',
        className,
        typography,
      )}
      whileHover={disabled ? undefined : { 
        backgroundColor: ['#ff5733', '#ff8c00', '#ff5733'],
        transition: { duration: 1.5, repeat: Infinity, repeatType: 'loop' }, }
      }
      whileTap={disabled ? undefined : { scale: 0.95 }}
      initial={{ scale: 1 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gradient-orange-1 to-gradient-orange-2 rounded-full"
        initial={{ opacity: 1 }}
        whileHover={disabled ? undefined : { opacity: 0 }}
        transition={{ duration: 0.7 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-l from-gradient-orange-1 to-gradient-orange-2 rounded-full"
        initial={{ opacity: 0 }}
        whileHover={disabled ? undefined : { opacity: 1 }}
        transition={{ duration: 0.7 }}
      />
      <span className="relative z-10">
        {children}
        {icon && (
          <Icon
            icon={icon}
            className={cx(iconSize)}
          />
        )}
      </span>
    </motion.button>
  );
};
