import { IconsArray } from '@/shared/enums/icons'
import type { ICallback, TLinks } from '@/shared/types';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon'
import Link from '@/shared/ui/link';
import ImageFlowers from '@/assets/image/flower.png';
import { useEffect, useState } from 'react';
import cx from 'classix';
import { useMatchMedia } from '@/shared/hooks/useMatchMedia';
import { useModal } from '@/shared/hooks/useModal';
import { ModalCallback } from '../Modal/Callback';

type THeader = {
  data: TLinks[];
  callback: ICallback;
};

export const Header: FCClass<THeader> = ({ data, callback }) => {
  const { isMobile } = useMatchMedia()
  const { openModal } = useModal()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isMobile && isOpen) toggleState()
  }, [isMobile])

  const toggleState = () => {
    document.body.classList.toggle('overflow-hidden');
    setIsOpen(!isOpen);
  };


	return (
    <section className='min-h-100 h-[30vh] t:min-h-150 t:h-[50vh] md:min-h-200 xl:h-[100vh] flex flex-col bg-black-200 rounded-b-[--spacing(10)] t:rounded-b-[--spacing(15)] d:rounded-b-[--spacing(21)]'>
      <header className='p-4 shadow-none !m-0 mx-auto'>
        <div className='flex flex-row justify-between items-center py-6 mx-auto'>
          <div className='flex gap-25 d:gap-39 justify-between items-center'>
            <Icon
              icon={IconsArray.logo}
              className='w-12 h-12 t:w-14.5 t:h-14.5 d:w-17.5 d:h-17.5 stroke-2'
              preserveAspectRatio="xMidYMid meet"
            />

            <nav className='t:flex gap-5 d:gap-12 d:gap-14 hidden'>
              {
                data.map(el => (
                  <Link key={el.title} url={el.url ?? ''} className='text-white-100 text-nowrap'>
                    {el.title}
                  </Link>
                ))
              }
            </nav>
          </div>
          

          <div className='flex items-center gap-5'>
            <Button onClick={() => openModal(<ModalCallback />)}>{callback.button.title}</Button>

            <Icon
              icon={IconsArray.burger}
              className='w-8 h-8 stroke-2 stroke-white-100 block t:hidden'
              preserveAspectRatio="xMidYMid meet"
              onClick={() => toggleState()}
            />
          </div>
          

          <div className={cx(
            'absolute hidden z-3 right-0 top-32 bg-black-200 w-full h-[calc(100vh-128px)] py-10 px-6',
            isOpen && '!flex t:!hidden'
          )}>
            <nav className='flex flex-col gap-6'>
              {
                data.map(el => (
                  <Link
                  key={el.title}
                  url={el.url ?? ''}
                  className='text-white-100 text-nowrap'
                  typography='h1'
                  onClick={() => toggleState()}
                  >
                    {el.title}
                  </Link>
                ))
              }
            </nav>
          </div>
        </div>
      </header>
      <div className='relative grow overflow-hidden'>
        <Icon
          className='max-w-300 w-[47%] h-[60%] absolute top-5 left-14 z-1'
          icon={IconsArray.crea}
        />
        <img
          src={ImageFlowers}
          className='max-w-400 w-[60%] absolute bottom-0 right-0 z-2'
        />
      </div>
    </section>
	)
}