import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d='M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19Zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2ZM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414Z'
    />
  </svg>
);
export default SvgEdit;
