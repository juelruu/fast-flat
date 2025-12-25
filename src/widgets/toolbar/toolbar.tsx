import logo from '/images/vite.svg';
import './toolbar.css';
import type { TNavigationLink } from '@/shared';
import { NavLink } from 'react-router';
import type { JSX } from 'react';

const LINKS: TNavigationLink[] = [
  {
    title: 'Main page',
    href: '/',
  },
];

export function MyToolbar({ children }: { children: JSX.Element }) {
  const links = LINKS.map((link, index) => (
    <NavLink key={index} to={link.href} end>
      {link.title}
    </NavLink>
  ));

  return (
    <div className="toolbar">
      <img src={logo} />
      <nav className="links">{links}</nav>
      <div className="options">{children}</div>
    </div>
  );
}
