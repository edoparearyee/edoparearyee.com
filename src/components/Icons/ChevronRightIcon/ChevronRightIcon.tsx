import React, { SVGProps } from 'react';

const ChevronRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M16.28 11.856a.75.75 0 0 1 0 1.061l-7.5 7.5a.75.75 0 0 1-1.06-1.06l6.97-6.97-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ChevronRightIcon;
