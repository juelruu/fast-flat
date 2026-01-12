import { type TNavigationLink } from '@/shared';

export const LINKS: TNavigationLink[] = [
  {
    title: 'Главная',
    href: '/',
  },
];

export const LINKS_WITH_AUTH: TNavigationLink[] = [
  {
    title: 'Разместить квартиру',
    href: 'post-flat',
  },
  {
    title: 'Мои брони',
    href: 'client-renting-list',
  },
  {
    title: 'Список моих квартир',
    href: 'show-private-flats'
  }
];
