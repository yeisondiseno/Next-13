// Next
import Image from 'next/image';
import Link from 'next/link';
// components
import { NavBar } from '@/components/';
import LogInOutButton from '@/modules/auth/components/logInOutButton/logInOutButton';
// assets
import Logo from '@assets/img/logo.svg';
// styles
import './header.scss';

export const Header = () => {
  return (
    <header className='o-header container'>
      <Link href={'/'}>
        <Image src={Logo} alt='LOLA S.A.S' width={218} height={82} />
      </Link>

      <NavBar />

      <LogInOutButton />
    </header>
  );
};
