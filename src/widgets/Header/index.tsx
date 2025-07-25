import { IconsArray } from '@/shared/enums/icons'
import type { ICallback, THeaderItem } from '@/shared/types';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon'
import Link from '@/shared/ui/link';

type THeader = {
  data: THeaderItem;
  callback: ICallback;
};

export const Header: FCClass<THeader> = ({ data, callback }) => {
	return (
    <div className='h-[100vh] flex flex-col bg-black-200 rounded-b-[--spacing(21)]'>
      <header className='p-4 shadow-none !m-0'>
        <div className='max-w-420 flex flex-row justify-between items-center py-6 mx-auto'>
          <div className='flex gap-39 justify-between items-center'>
            <Icon
              icon={IconsArray.logo}
              className='w-17.5 h-17.5 stroke-2'
              preserveAspectRatio="xMidYMid meet"
            />

            <nav className='flex gap-14'>
              {
                data.map(el => (
                  <Link key={el.title} url={el.url} className='text-white-100 text-nowrap'>
                    {el.title}
                  </Link>
                ))
              }
            </nav>
          </div>
          

          <Button>{callback.button.title}</Button>
        </div>
      </header>
      <div className=' grow'>

      </div>
    </div>
	)
}