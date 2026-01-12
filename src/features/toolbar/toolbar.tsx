import logo from '/images/vite.svg';
import './toolbar.css';
import { NavLink } from 'react-router';
import type { JSX } from 'react';
import { useUserStore } from '@/entities';
import { isNotNuN } from '@/shared';
import { LINKS, LINKS_WITH_AUTH } from './links.config';

export function MyToolbar({ children }: { children: JSX.Element }) {
  const user = useUserStore(state => state.user);
  const links = LINKS.concat(isNotNuN(user) ? LINKS_WITH_AUTH : []).map((link, index) => (
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
