import type { IconsArray } from '../enums/icons';
import type { LINK } from '../enums/link';

export type TLinks = {
  title: string;
  url?: LINK | string;
};

export interface ICallback {
  button: {
    title: string;
  };
  caseText: string;
  promoTitle: string;
  promoText: string;
  modal: ModalCallback;
}

export type TStackItem = {
  icon: IconsArray;
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

export type TFooterDataItem = {
  title: string;
  items?: TLinks[];
  links?: TLinks[];
  phone?: TLinks[];
  emails?: TLinks[];
};

export interface IFooterData {
  [key: string]: TFooterDataItem;
}

export type TFooterOffers = {
  title: string;
};

export interface IFooter {
  text: string;
  data: IFooterData;
  offers: TFooterOffers;
}

export interface IOption {
  label: string;
  value: string;
}

export interface Field {
  type: 'input' | 'select' | 'checkbox';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: IOption[];
}

interface ModalCallback {
  title: string;
  fields: Field[];
}

export interface IApiData {
  header: TLinks[];
  callback: ICallback;
  skills: ISkills;
  about: IAbout;
  promo: IPromo;
  cases: ICases;
  footer: IFooter;
}