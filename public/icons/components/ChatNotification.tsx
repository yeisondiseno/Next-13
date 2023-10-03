import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChatNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 28 25'
    {...props}
  >
    <path
      fill='#1E2D5C'
      d='M6.455 20 2 23.5V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455Zm-.692-2H20V6H4v13.385L5.763 18ZM11 11h2v2h-2v-2Zm-4 0h2v2H7v-2Zm8 0h2v2h-2v-2Z'
    />
    <circle cx={22} cy={6} r={5} fill='#B98D14' stroke='#fff' strokeWidth={2} />
  </svg>
);
export default SvgChatNotification;
