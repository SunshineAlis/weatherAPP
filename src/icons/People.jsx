import * as React from "react";
const People = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    fill="none"
    stroke="#D8D8D8"
    stroke-width={2}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx={12} cy={7} r={4} />
  </svg>
);
export default People;
