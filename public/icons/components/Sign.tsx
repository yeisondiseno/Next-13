import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='m17.849 11.807-.707-.707-9.9 9.9H3v-4.243L14.313 5.443 19.97 11.1a1 1 0 0 1 0 1.414l-7.07 7.071-1.415-1.414 6.364-6.364Zm-2.121-2.121-1.415-1.414L5 17.585V19h1.414l9.314-9.314Zm2.828-7.07 2.829 2.827a1 1 0 0 1 0 1.414L19.97 8.272l-4.242-4.243 1.414-1.414a1 1 0 0 1 1.414 0Z'
    />
  </svg>
);
export default SvgSign;
