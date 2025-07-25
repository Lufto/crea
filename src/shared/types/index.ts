export type THeaderItem = {
  title: string;
  url: string;
}[];

export interface ICallback {
  button: {
    title: string;
  };
  caseText: string;
  promoTitle: string;
  promoText: string;
}

export type TStackItem = {
  icon: string;
  title: string;
  text: string;
};

export interface ISkillsStack {
  title: string;
  items: TStackItem[];
}

export interface ISkills {
  title: string;
  subtitle: string;
  text: string;
  stack: ISkillsStack;
}

export interface IAbout {
  title: string;
  subtitle: string;
  text: string;
}

export type TPromoItem = {
  title: string;
  text: string;
};

export interface IPromo {
  title: string;
  items: TPromoItem[];
}

export type TCaseItem = {
  title: string;
  qualities: string[];
  product: string;
};

export interface ICases {
  title: string;
  slides: unknown[];
  items: TCaseItem[];
}

export type TNavigationData = {
  title: string;
  items: string[];
};

export interface IContactsData {
  title: string;
  phone: string[];
  emails: string[];
}

export interface IFooterData {
  navigation: TNavigationData;
  SERVICES: TNavigationData;
  Contacts: IContactsData;
}

export type TFooterOffers = {
  title: string;
};

export interface IFooter {
  text: string;
  data: IFooterData;
  offers: TFooterOffers;
}

export interface IApiData {
  header: THeaderItem[];
  callback: ICallback;
  skills: ISkills;
  about: IAbout;
  promo: IPromo;
  cases: ICases;
  footer: IFooter;
}