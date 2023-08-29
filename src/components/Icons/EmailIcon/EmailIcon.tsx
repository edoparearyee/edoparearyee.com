import React, { SVGProps } from 'react';

const EmailIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 17"
    fill="currentColor"
    {...props}
  >
    <path d="M.5 5.056v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-8.58l-8.928 5.494a3 3 0 0 1-3.144 0L.5 5.056Z" />
    <path d="M21.5 3.295v-.158a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.977a1.5 1.5 0 0 0 1.572 0L21.5 3.295Z" />
  </svg>
);
export default EmailIcon;
