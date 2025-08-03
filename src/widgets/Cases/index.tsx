import { IconsArray } from '@/shared/enums/icons';
import { useModal } from '@/shared/hooks/useModal';
import type { ICallback, ICases } from '@/shared/types';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon';
import cx from 'classix';
import { ModalCallback } from '../Modal/Callback';

type TCases = {
  data?: ICases;
  callback: ICallback;
};

export const Cases: FCClass<TCases> = ({ data, callback }) => {
  const { openModal } = useModal()
  
  if (!data) return;
  const { title, items } = data
  
  return (
    <section id='cases'>
      <div className='container'>
        <h2 className='h3'>{title}</h2>

        <div>
          
        </div>

        <div className={cx(
          'relative flex flex-col mt-10 d:mt-15',
          'before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-gradient-orange-1 before:to-gradient-orange-2 before:rounded-full'
        )}>
          {
            items.map((item) => {
              return (
                <div className={cx(
                  'relative flex flex-col d:flex-row d:items-center justify-between gap-6 d:gap-12.5 py-6.25',
                  'before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-linear-to-r before:from-gradient-orange-1 before:to-gradient-orange-2 before:rounded-full'
                  )}>
                  <div className='t8 d:max-w-80 d:w-2/8 d:pl-10'>{item.title}</div>
                  <div className='t7 d:w-3/8 flex flex-col gap-2'>
                    {
                      item.qualities.map((quality) => (
                        <div className='flex items-center gap-2'>
                          <Icon icon={IconsArray.checked}/>
                          <span>{quality}</span>
                        </div>
                      ))
                    }
                  </div>
                  <div className='t7 !font-bold d:max-w-120 d:w-3/8'>{item.product}</div>
                </div>
              )
            })
          }
        </div>
        <div className='mt-10 d:mt-25 flex flex-col gap-6.25'>
          <h3 className='t2'>{callback.caseText}</h3>
          <Button onClick={() => openModal(<ModalCallback />)}>{callback.button.title}</Button>
        </div>
      </div>
    </section>
  )
}