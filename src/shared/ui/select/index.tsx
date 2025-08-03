import type { Field } from '@/shared/types';
import Select from 'react-select';
import './style.scss'
import cx from 'classix';

export const CustomSelect: FCClass<Field> = ({ options, placeholder, required, label }) => {
  if(!options) return

  return (
    <div className='flex flex-col gap-5'>
      <div className='t5'>{label}{required && <span className='t2 text-orange-300'>*</span>}</div>

      <Select
        classNames={{
          control: () => cx('t5 !border-orange-200 !rounded-full p-1 !shadow-none'),
          menu: () => cx('t5'),
          option: (state) => cx(
            'bg-white-200',
            state.isSelected && '!bg-gray-100 !text-black-100',
          )
        }}
        required={required}
        placeholder={placeholder}
        classNamePrefix="select"
        isLoading={false}
        isClearable={false}
        isRtl={false}
        isSearchable={true}
        name="color"
        options={options}
      />
    </div>
  );
};