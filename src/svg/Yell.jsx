import * as React from "react";

const Yell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={184}
    height={184}
    fill="none"
    {...props}
  >
    {/* Filter applied group */}
    <g filter="url(#a)">
      {/* Main Circle */}
      <circle cx={92} cy={88} r={88} fill="#FF8E27" />
      {/* Gradient Circle */}
      <circle
        cx={92}
        cy={88}
        r={88}
        fill="url(#b)"
        fillOpacity={0.35}
        style={{
          mixBlendMode: "overlay",
        }}
      />
    </g>

    <defs>
      {/* Gradient Definition */}
      <radialGradient
        id="b"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </radialGradient>

      {/* Filter Definition */}
      <filter
        id="a"
        width={184}
        height={184}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_20_174" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_20_174"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Yell;