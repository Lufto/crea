import type { Field } from '@/shared/types';

export const Input: FCClass<Field> = ({ placeholder, required, label }) => {
  return (
    <div className='w-full flex flex-col gap-5'>
      <div className='t5'>{label}{required && <span className='t2 text-orange-300'>*</span>}</div>
      <input
        className='t5 w-full border !border-orange-200 !rounded-full p-2'
        type='text'
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};