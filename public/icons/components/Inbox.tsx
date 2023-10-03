import * as React from 'react';
import type { SVGProps } from 'react';
const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
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
      d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm17 11h-3.416a5.002 5.002 0 0 1-9.168 0H4v5h16v-5Zm0-2V5H4v7h5a3 3 0 0 0 6 0h5Z'
    />
  </svg>
);
export default SvgInbox;
