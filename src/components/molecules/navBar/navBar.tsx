'use client';
// Next
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// style
import './navBar.scss';

export const NavBar = () => {
  const pathname = usePathname();

  const ROUTE_LIST = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/example',
      name: 'Characters',
    },
    {
      path: '/example-form',
      name: 'Forms',
    },
  ];

  return (
    <ul className='m-nav-bar'>
      {ROUTE_LIST.map(({ path, name }) => {
        const isActive = pathname === path;

        return (
          <li key={name}>
            <Link className={isActive ? 'active' : ''} href={path}>
              {name}
            </Link>
            {isActive && <span className='m-nav-bar--mark' />}
          </li>
        );
      })}
    </ul>
  );
};
