import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

const Shell = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Shell;
