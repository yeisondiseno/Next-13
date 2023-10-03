import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChange = (props: SVGProps<SVGSVGElement>) => (
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
      d='M16.05 12.05 21 17l-4.95 4.95-1.414-1.413L17.172 18H4v-2h13.172l-2.536-2.535 1.414-1.414Zm-8.1-10 1.414 1.415L6.828 6H20v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95Z'
    />
  </svg>
);
export default SvgChange;
