import { IconsArray } from '@/shared/enums/icons';
import { LINK } from '@/shared/enums/link';
import type { IApiData } from '@/shared/types';

export const Data: IApiData = {
  header: [
    {
      title: "навыки",
      url: LINK.SKILLS
    },
    {
      title: "о нас",
      url: LINK.ABOUT
    },
    {
      title: "кейсы",
      url: LINK.CASES
    },
    {
      title: "контакты",
      url: LINK.CONTACTS
    }
  ],
  callback: {
    button: {
      title: "оставить заявку"
    },
    caseText: "Всё ещё думаете, оставьте заявку и мы вам поможет определиться!",
    promoTitle: "Хотите сайт, который не просто существует, а зарабатывает?",
    promoText: "Давайте обсудим ваш проект — мы найдем идеальное решение для вашего бизнеса.",
    modal: {
      title: "Заполните форму",
      fields: [
        {
          type: "input",
          label: "Имя",
          placeholder: "",
          required: true,
        },
        {
          type: "input",
          label: "Номер телефона",
          placeholder: "",
          required: true,
        },
        {
          type: "input",
          label: "Telegram @user",
          placeholder: "",
        },
        {
          type: "select",
          label: "Как в вами связаться ",
          placeholder: "Выбрать",
          required: true,
          options: [
            {
              label: 'fdsfds',
              value: 'ffff',
            },
            {
              label: 'fdsfds2',
              value: 'ffff2',
            },
            {
              label: 'fdsfds3',
              value: 'ffff3',
            },
          ]
        },
        {
          type: "checkbox",
          label: "Согласие на использование персональных даннах",
          required: true,
        },
      ]
    }
  },
  skills: {
    title: "НАВЫКИ",
    subtitle: "Полный цикл digital-разработки — от идеи до масштабируемого продукта",
    text: "Мы не просто пишем код — мы создаем работающие бизнес-решения под ключ. Наша экспертиза охватывает все этапы разработки:",
    stack: {
      title: "Технологический стек",
      items: [
        {
          icon: IconsArray.backend,
          title: "Backend",
          text: "Высоконагруженные системы на Python/Node.js/Go, под ваши бизнес-процессы"
        },
        {
          icon: IconsArray.frontend,
          title: "Frontend",
          text: "Интерактивные SPA на React/Vue.js с упором на UX и конверсию"
        },
        {
          icon: IconsArray.py,
          title: "Telegram-боты",
          text: "Автоматизация продаж, CRM-интеграции и AI-ассистенты"
        },
        {
          icon: IconsArray.mobile,
          title: "Мобильные приложения",
          text: "Наитивные Android-решения (Kotlin) с бесшовной интеграцией в вашу экосистему"
        },
        {
          icon: IconsArray.design,
          title: "Дизайн",
          text: "UI/UX разработка, прототипирование и юзабилити-тестировани"
        }
      ]
    }
  },
  about: {
    title: "О НАС",
    subtitle: "Создаем цифровые продукты, которые приносят прибыль",
    text: "Мы проектируем чистые, современные и высококонверсионные веб-сайты, которые не просто красивы — <span>они продают.<span>"
  },
  promo: {
    title: "Почему клиенты выбирают нас?",
    items: [
      {
        title: "Скорость = деньги",
        text: "Высоконагруженные системы на Python/Node.js/Go, под ваши бизнес-процессы"
      },
      {
        title: "Технологии, которые увеличивают конверсию",
        text: "А/В тестирование, heatmap-анализ и адаптивный дизайн — мы используем data-driven подход, чтобы ваш сайт приносил больше клиентов."
      },
      {
        title: "Дизайн, который вызывает доверие",
        text: "Чистые линии, продуманные акценты и психология восприятия — мы делаем так, чтобы пользователь чувствовал себя комфортно и хотел остаться."
      }
    ]
  },
  cases: {
    title: "КЕЙСЫ",
    slides: [],
    items: [
      {
        title: "Брендинг",
        qualities: [
          "Разработка логотипов и айдентики",
          "Глубокий анализ целевой аудитории",
          "Позиционирование, которое привлекает клиентов"
        ],
        product: "Создаем узнаваемые и сильные бренды, которые выделяются на рынке."
      },
      {
        title: "Веб-приложение",
        qualities: [
          "Индивидуальный UX/UI-дизайн",
          "Адаптивные и высоконагруженные системы",
          "Внедрение современных технологий (React, Node.js, Python)"
        ],
        product: "Разрабатываем быстрые, удобные и мощные веб-решения, которые работают на ваш бизнес."
      },
      {
        title: "Дизайн",
        qualities: [
          "UI/UX-дизайн сайтов и приложений",
          "Прототипирование и тестирование гипотез",
          "Графика, которая продает"
        ],
        product: "Продуманный дизайн, который упрощает взаимодействие и усиливает доверие."
      },
      {
        title: "Стратегия",
        qualities: [
          "Анализ рынка и конкурентов",
          "Построение воронок продаж",
          "План масштабирования и роста"
        ],
        product: "Превращаем ваши идеи в работающие бизнес-модели."
      }
    ]
  },
  footer: {
    text: "Подбираем наитивные решения для роста продаж и увеличения популярности вашего Бренда!",
    data: {
      navigation: {
        title: "Навигация",
        links: [
              {
                title: "навыки",
                url: LINK.SKILLS
              },
              {
                title: "о нас",
                url: LINK.ABOUT
              },
              {
                title: "кейсы",
                url: LINK.CASES
              },
              {
                title: "контакты",
                url: LINK.CONTACTS
              }
        ]
      },
      services: {
        title: "УСЛУГИ",
        items: [
          {
            title: "Брендинг",
          },
          {
            title: "Веб-приложение",
          },
          {
            title: "Дизайн",
          },
          {
            title: "Стратегия",
          }
        ]
      },
      contacts: {
        title: "Контакты",
        phone: [
          {
            title: "+7 (937) 778 41 78",
            url: "+7 (937) 778 41 78"
          },
          {
            title: "+7 (917) 889-95-90",
            url: "+7 (937) 778 41 78"
          }
        ],
        emails: [
          {
            title: "Crea@bk.ru",
            url: "Crea@bk.ru"
          }
        ]
      }
    },
    offers: {
      title: "оферта"
    }

  },
};