import NextAuth from 'next-auth';

export interface UserType {
  name?: string;
}

declare module 'next-auth' {
  interface Session {
    authenticated: boolean;
    user: UserType;
  }
}
