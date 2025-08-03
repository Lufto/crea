import { IconsArray } from '@/shared/enums/icons';
import type { Field } from '@/shared/types';
import { Icon } from '../icon';
import { useState } from 'react';

export const Checkbox: FCClass<Field> = ({ placeholder, required, label }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className='w-full flex gap-5 items-center'>
      <div className='relative'>
        <input
          className='appearance-none border !border-orange-200 !rounded-xm p-2.5'
          type='checkbox'
          placeholder={placeholder}
          required={required}
          onClick={() => setIsChecked(!isChecked)}
        />
        {isChecked &&
          <Icon icon={IconsArray.checked} className='absolute top-1/2 left-1/2 -translate-1/2 w-3 h-3'/>
        }
      </div>
      <div className='t9'>{label}{required && <span className='t7 text-orange-300'>*</span>}</div>
    </div>
  );
};