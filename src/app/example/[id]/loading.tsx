// components
import { Skeleton } from '@/components/';
// styles
import './example.scss';

export const LoadingExample = () => {
  return (
    <main className='p-character container'>
      <Skeleton width={400} variant='text' />
      <section className='p-character--body'>
        <Skeleton width={300} height={300} />
        <div>
          <Skeleton variant='text' width={180} />
          <Skeleton variant='text' width={400} />
          <Skeleton variant='text' width={240} />
        </div>
      </section>
    </main>
  );
};

export default LoadingExample;
