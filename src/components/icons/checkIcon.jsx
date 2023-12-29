import * as React from "react";

export const CheckIcon = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m8.5 12.5 2 2 5-5"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
    />
  </svg>
);
