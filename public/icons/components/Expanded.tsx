import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExpanded = (props: SVGProps<SVGSVGElement>) => (
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
      d='M15.44 9c.862 0 1.56.664 1.56 1.483 0 .412-.18.806-.498 1.086l-3.441 3.035a1.62 1.62 0 0 1-2.121 0L7.498 11.57a1.431 1.431 0 0 1-.082-2.095A1.6 1.6 0 0 1 8.56 9h6.88Z'
    />
  </svg>
);
export default SvgExpanded;
