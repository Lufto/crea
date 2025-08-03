import { IconsArray } from '@/shared/enums/icons'
import type { ISkills, TStackItem } from '@/shared/types';
import { Icon } from '@/shared/ui/icon'

type TSkills = {
  data?: ISkills;
};

export const Skills: FCClass<TSkills> = ({ data }) => {
  if (!data) return;
  const {title, subtitle, text, stack} = data
  
	return (
    <section id='skills'>
     <div className='container'>
        <div className='py-5 d:py-10.75'>
          <h2 className='h1'>{title}</h2>
          <div className='h2 text-orange-100 mt-5 d:mt-12'>{subtitle}</div>
          <p className='t3 mt-4 d:mt-8.25'>{text}</p>
        </div>
        <div className='py-5'>
          <h3 className='h2'>{stack.title}</h3>
          <div className='w-full flex flex-wrap justify-start t:justify-center gap-7 d:gap-15 mt-10 px-5'>
            {
              stack.items.map((el: TStackItem) => (
                <div className='t:max-w-70 d:max-w-100 flex flex-col gap-3.75'>
                  <Icon 
                    icon={IconsArray[el.icon]}
                    className='max-w-12 max-h-12 w-full h-full'
                  />
                  <div className='t1 text-transparent bg-clip-text bg-gradient-to-r from-gradient-orange-1 to-gradient-orange-2'>{el.title}</div>
                  <div className='t3 mt-2'>{el.text}</div>
                </div>
              ))
            }
          </div>
        </div>
     </div>
    </section>
	)
}