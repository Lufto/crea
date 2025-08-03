import { useModal } from '@/shared/hooks/useModal';
import type { ICallback, IPromo } from '@/shared/types';
import { Button } from '@/shared/ui/button';
import cx from 'classix';
import { ModalCallback } from '../Modal/Callback';

type TPromo = {
  data?: IPromo;
  callback: ICallback;
};

export const Promo: FCClass<TPromo> = ({ data, callback }) => {
  const { openModal } = useModal()
  
  if (!data) return;
  const { title, items } = data
  
  return (
    <section className='bg-black-200'>
      <div className='container'>
        <h2 className='h3 text-white-100'>{title}</h2>
        <div className={cx(
          'relative flex flex-col gap-15 mt-15',
          'before:absolute before:w-1 before:h-6/8 before:bg-linear-to-r before:from-gradient-orange-1 before:to-gradient-orange-2 before:rounded-full before:left-2.5 before:top-4',
          't:before:w-2 t:before:left-5'
        )}>
          {
            items.map((item) => {
              return (
                <div className='pl-8 t:pl-18 flex flex-col gap-5'>
                  <div 
                    className={cx(
                      't6 relative w-fit py-3 px-5 bg-linear-to-r from-gradient-orange-1 to-gradient-orange-2 text-white-100 rounded-full',
                      'd:py-4.5 d:px-10.5',
                      'before:absolute before:w-6.5 before:h-6.5 before:bg-linear-to-r before:from-gradient-orange-1 before:to-gradient-orange-2 before:rounded-full before:-left-8 t:before:-left-18 before:top-1/2 before:-translate-y-1/2',
                      't:before:w-12.5 t:before:h-12.5'
                    )}
                  >
                    {item.title}
                  </div>
                  <div className='t6 text-white-100 max-w-275'>
                    {item.text}
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='mt-10 t:mt-15 d:mt-25 flex flex-col gap-6.25'>
          <h3 className='h5 text-white-100'>{callback.promoTitle}</h3>
          <div className='t6 text-white-100'>{callback.promoText}</div>
          <Button onClick={() => openModal(<ModalCallback />)}>{callback.button.title}</Button>
        </div>
      </div>
    </section>
  )
}