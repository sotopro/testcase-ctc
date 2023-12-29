import * as React from "react";

export const ListIcon = ({
  width = "24",
  height = "24",
  fill = "none",
  color = "#ffffff",
  strokeWidth = 2,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      d="M20 7H4M15 12H4M9 17H4"
    />
  </svg>
);
