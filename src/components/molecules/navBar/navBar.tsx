'use client';
// Next
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Auth
import { useSession } from 'next-auth/react';
// components
import { Skeleton } from '@/components/';
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
      path: '/ui-kit',
      name: 'UIKit',
    },
    {
      path: '/example',
      name: 'Characters',
    },
    {
      path: '/example-form',
      name: 'Forms',
    },
    {
      path: '/cyber-security',
      name: 'Security',
    },
  ];

  // Auth
  const { data: session, status } = useSession();

  if (status === 'loading')
    return (
      <ul className='m-nav-bar'>
        {ROUTE_LIST.map(({ name }) => (
          <li key={name}>
            <Skeleton width={80} height={30} />
          </li>
        ))}
      </ul>
    );

  if (status === 'authenticated' && session) {
    ROUTE_LIST.push({
      path: '/admin',
      name: 'Admin',
    });
  }

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
