import * as React from "react";

const Pur = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={128}
    fill="none"
    {...props}
  >
    {/* Гол дугуй */}
    <circle cx={64} cy={64} r={64} fill="#6E72C9" />

    {/* Харагдах сүүдэр / градиент */}
    <circle
      cx={64}
      cy={64}
      r={64}
      fill="url(#a)"
      fillOpacity={0.35}
      style={{
        mixBlendMode: "overlay",
      }}
    />

    {/* Градиент тодорхойлолт */}
    <defs>
      <radialGradient id="a" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#fff" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export default Pur;