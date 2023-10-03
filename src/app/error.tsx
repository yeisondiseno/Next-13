'use client';
// components
import { Button } from '@/components/';

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <html>
      <body>
        <main className='container'>
          <h2>Something went wrong!</h2>
          <Button variant='primary' onClick={() => reset()}>
            Try again
          </Button>
        </main>
      </body>
    </html>
  );
};

export default GlobalError;
