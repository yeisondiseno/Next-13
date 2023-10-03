'use client';
// Next
import Link from 'next/link';
// Auth
import { signOut, useSession } from 'next-auth/react';
// components
import { Button, Skeleton } from '@/components/';

const LogInOutButton = () => {
  // Auth
  const { data: session, status } = useSession();

  if (status === 'loading') return <Skeleton width={100} height={48} />;

  if (status === 'authenticated' && session) {
    return (
      <Button variant='primary' onClick={() => signOut()}>
        Login Out
      </Button>
    );
  }

  return (
    <Link href='/api/auth/signin'>
      <Button variant='secondary'>Login</Button>
    </Link>
  );
};

export default LogInOutButton;
