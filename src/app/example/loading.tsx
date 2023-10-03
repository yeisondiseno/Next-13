// components
import { Skeleton } from '@/components/';
// styles
import './example.scss';

export const LoadingExample = () => {
  return (
    <main className='container'>
      <Skeleton width={400} variant='text' />
      <section className='p-example--cards'>
        {Array.from(Array(6).keys()).map((e) => (
          <div className='card-skeleton' key={e}>
            <Skeleton height={300} />
            <div className='card-skeleton--body'>
              <Skeleton variant='text' width={80} />
              <Skeleton variant='text' />
              <Skeleton variant='text' width={160} />
              <br />
              <Skeleton height={40} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default LoadingExample;
