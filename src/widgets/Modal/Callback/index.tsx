import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import { Input } from '@/shared/ui/input';
import { CustomSelect } from '@/shared/ui/select';
import { Data } from '@/data/common';

const { callback } = Data;

export const ModalCallback: FCClass = () => {
  if(!callback) return;
  const { title, fields } = callback.modal

  return (
    <div className='px-10'>
      <h3 className='h5 text-center'>{title}</h3>
      <form className='gap-2 flex flex-col mt-10'>
        {
          fields.map((field) => (
            <div className='gap-6.5 flex flex-col'>
              {field.type === "input" && <Input {...field} />}
              {field.type === "select" && <CustomSelect {...field} />}
              {field.type === "checkbox" && <Checkbox {...field} />}
            </div>
          ))
        }
        <Button type='submit' className='t9 !px-5 !py-3 ml-auto'>{callback.button.title}</Button>
      </form>
    </div>
  )
}