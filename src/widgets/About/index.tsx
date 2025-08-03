import { IconsArray } from '@/shared/enums/icons'
import type { IAbout } from '@/shared/types';
import { DangerouslyInnerHTML } from '@/shared/ui/derger';
import { Icon } from '@/shared/ui/icon'

type TAbout = {
  data?: IAbout;
};

export const About: FCClass<TAbout> = ({ data }) => {
  if (!data) return;
  const {title, subtitle, text, } = data
  
  return (
    <section className='relative' id='about'>
      <div className='container min-h-70 t:min-h-110 d:min-h-145 h-full !pt-16.25 !pb-26.5 flex flex-col t:justify-between'>
          <h2 className='h1'>{title}</h2>
          <div className='flex flex-col gap-7 w-full t:w-2/3 d:w-1/2 mt-5'>
            <div className='h5 !font-black uppercase'>{subtitle}</div>
            <DangerouslyInnerHTML className='t2 *:text-orange-100'>{text}</DangerouslyInnerHTML>
          </div>
          <Icon
            icon={IconsArray.rectangleBg}
            className='absolute right-0 top-0 h-full w-full -z-1 fit-cower'
          />
      </div>
    </section>
  )
}