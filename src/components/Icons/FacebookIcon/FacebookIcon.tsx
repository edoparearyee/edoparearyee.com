import React, { SVGProps } from 'react';

const FacebookIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path d="M20 10.061C20 4.505 15.523 0 10 0S0 4.505 0 10.061C0 15.083 3.657 19.245 8.438 20v-7.03h-2.54v-2.91h2.54V7.845c0-2.522 1.492-3.915 3.777-3.915 1.093 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.572v1.886h2.773l-.443 2.908h-2.33V20c4.78-.755 8.437-4.917 8.437-9.939Z" />
  </svg>
);
export default FacebookIcon;
