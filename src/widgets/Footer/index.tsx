import { IconsArray } from '@/shared/enums/icons'
import { useModal } from '@/shared/hooks/useModal';
import type { ICallback, IFooter, TFooterDataItem, TLinks } from '@/shared/types';
import { Button } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/icon'
import { ModalCallback } from '../Modal/Callback';

type TFooter = {
  data: IFooter;
  callback: ICallback;
};

const List: FCClass<{
  items: TLinks[];
  type?: 'tel' | 'mailto' | 'link';
}> = ({ items, type }) => (
  <>
    <ul className="flex flex-col gap-3.75">
      {items.map((item, index) => (
        <li key={index} className="t6">
          {type === 'tel' && <a href={`tel:${item.url}`} className="hover:underline">{item.title}</a>}
          {type === 'mailto' && <a href={`mailto:${item.url}`} className="hover:underline">{item.title}</a>}
          {type === 'link' && <a href={item.url} className="hover:underline">{item.title}</a>}
          {!type && item.title}
        </li>
      ))}
    </ul>
  </>
);

const Section: FCClass<TFooterDataItem & ICallback & {isButton: boolean}> = ({ title, items, phone, emails, links, isButton, button }) => {
  const { openModal } = useModal()
  return (
    <div className="flex flex-col gap-2.5">
      {title && <h2 className="h6 mb-3 d:mb-6">{title}</h2>}
      {items && <List items={items} />}
      {phone && <List items={phone} type="tel" />}
      {links && <List items={links} type="link" />}
      {emails && <List items={emails} type="mailto" />}
      {isButton && <Button onClick={() => openModal(<ModalCallback/>)}>{button.title}</Button>}
    </div>
  )
};

export const Footer: FCClass<TFooter> = ({ data, callback }) => {
  const {data: elements, text, offers} = data

	return (
    <section className='flex bg-black-200' id='footer'>
      <div className='p-12.5 w-full flex flex-col gap-10'>
        <div className='flex flex-col-reverse gap-8 xl:flex-row justify-between text-white-100'>
          <div className='flex flex-col gap-4 xl:w-1/3'>
            <div className='flex gap-4 items-center'>
              <Icon
                icon={IconsArray.logo}
                className='w-17.5 h-17.5'
              />
              <Icon
                icon={IconsArray.crea}
                className='w-26.25 h-13.75'
              />
            </div>
            <div className='t6'>{text}</div>
          </div>
          <div className='max-w-350 flex flex-col-reverse t:flex-row flex-wrap w-full justify-between gap-10'>
            {Object.keys(elements).map((key, index) => (
              <Section
                key={index}
                title={elements[key].title}
                items={elements[key].items}
                phone={elements[key].phone}
                emails={elements[key].emails}
                links={elements[key].links}
                isButton={key === 'contacts'}
                {...callback}
              />
            ))}
          </div>
        </div>
        <div className='t5 text-white-100 text-end'>
          {offers.title}
        </div>
      </div>
    </section>
	)
}