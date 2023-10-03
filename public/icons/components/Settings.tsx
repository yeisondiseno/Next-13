import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
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
      d='m8.686 4 2.607-2.608a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.313V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.685V5a1 1 0 0 1 1-1h3.686ZM6 6v3.514L3.515 12 6 14.484V18h3.515L12 20.484 14.485 18H18v-3.515L20.485 12 18 9.514V6h-3.515L12 3.514 9.515 6H6Zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
    />
  </svg>
);
export default SvgSettings;
