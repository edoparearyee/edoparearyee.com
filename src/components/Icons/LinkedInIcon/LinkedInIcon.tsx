import React, { SVGProps } from 'react';

const LinkedInIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M16.696 0H1.356C.624 0 0 .58 0 1.295v15.409C0 17.42.409 18 1.143 18h15.339c.735 0 1.518-.58 1.518-1.296V1.295A1.29 1.29 0 0 0 16.696 0ZM6.857 6.857H9.28v1.235h.027c.37-.666 1.46-1.342 2.81-1.342 2.589 0 3.312 1.375 3.312 3.921v4.758h-2.572V11.14c0-1.14-.455-2.14-1.52-2.14-1.292 0-1.908.875-1.908 2.312v4.117H6.857V6.857ZM2.571 15.43h2.572V6.857H2.57v8.572ZM5.464 3.857a1.607 1.607 0 1 1-3.213.001 1.607 1.607 0 0 1 3.213 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default LinkedInIcon;
