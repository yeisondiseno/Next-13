import { useMemo } from 'react';
// styles
import './skeleton.scss';

interface SkeletonProps {
  width?: number;
  variant?: 'text' | 'circle' | '';
  height?: number;
}

export const Skeleton = ({ width, height, variant = '' }: SkeletonProps) => {
  const setHeight = useMemo(() => {
    if (variant === 'text') return 16;
    if (variant === 'circle') return width;
    return height;
  }, [variant, height]);

  return (
    <section
      className={`a-skeleton ${variant}`}
      style={{ width: width, height: setHeight }}
    />
  );
};
