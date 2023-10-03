'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// components
import { Button } from '@/components/';
// styles
import './homePage.scss';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <main className='p-not-found container'>
      <Button onClick={() => router.back()}> Go Back</Button>

      <div className='p-not-found--body'>
        <h1>¡404!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab quae
          vel quibusdam ipsam. Sequi qui quia necessitatibus accusamus eius
          maiores provident error odit dolores, reiciendis ut, a enim non.
        </p>
        <hr />
        <Link href={'/'}>
          <Button variant='primary' className='w-large'>
            Go to Home Page
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
