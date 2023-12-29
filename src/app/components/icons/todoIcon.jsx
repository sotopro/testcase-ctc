import * as React from "react";

export const TodoIcon = ({
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
      fill={color}
      fillOpacity={0.15}
      d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"
    />
    <path
      fill={color}
      d="m3.353 15.05-.73.17.73-.17Zm0-6.1-.73-.17.73.17Zm17.294 0-.73.172.73-.172Zm0 6.1-.73-.172.73.172Zm-5.597 5.597-.172-.73.172.73Zm-6.1 0 .172-.73-.172.73Zm0-17.294.172.73-.172-.73Zm6.1 0-.172.73.172-.73Zm-7.2 5.516a.75.75 0 0 0-1.062 1.06L7.85 8.87Zm.509 1.57-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm2.61-1.55a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm2.071.28a.75.75 0 0 0 0 1.5v-1.5Zm3.641 1.5a.75.75 0 0 0 0-1.5v1.5ZM7.85 14.07a.75.75 0 0 0-1.06 1.061l1.06-1.06Zm.51 1.571-.53.53a.75.75 0 0 0 1.06 0l-.53-.53Zm2.61-1.55a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm2.071.28a.75.75 0 0 0 0 1.5v-1.5Zm3.641 1.5a.75.75 0 0 0 0-1.5v1.5Zm-12.598-.993a12.604 12.604 0 0 1 0-5.756l-1.46-.343a14.104 14.104 0 0 0 0 6.442l1.46-.343Zm15.834-5.756a12.603 12.603 0 0 1 0 5.756l1.46.343a14.104 14.104 0 0 0 0-6.442l-1.46.343Zm-5.039 10.795a12.603 12.603 0 0 1-5.756 0l-.343 1.46c2.119.497 4.323.497 6.442 0l-.343-1.46ZM9.122 4.083a12.604 12.604 0 0 1 5.756 0l.343-1.46a14.103 14.103 0 0 0-6.442 0l.343 1.46Zm0 15.834a6.761 6.761 0 0 1-5.039-5.039l-1.46.343a8.261 8.261 0 0 0 6.156 6.156l.343-1.46Zm6.099 1.46a8.261 8.261 0 0 0 6.156-6.156l-1.46-.343a6.761 6.761 0 0 1-5.039 5.039l.343 1.46Zm-.343-17.294a6.761 6.761 0 0 1 5.039 5.039l1.46-.343a8.261 8.261 0 0 0-6.156-6.156l-.343 1.46ZM8.78 2.623a8.261 8.261 0 0 0-6.156 6.156l1.46.343a6.761 6.761 0 0 1 5.039-5.039l-.343-1.46ZM6.79 9.93l1.04 1.04 1.06-1.06-1.04-1.041-1.06 1.06Zm2.1 1.04 2.08-2.08-1.06-1.061-2.08 2.08 1.06 1.06Zm4.151-.3h3.641v-1.5h-3.64v1.5ZM6.788 15.13l1.04 1.04 1.061-1.06-1.04-1.04-1.06 1.06Zm2.101 1.04 2.08-2.08-1.06-1.06-2.08 2.08 1.06 1.06Zm4.151-.3h3.641v-1.5h-3.64v1.5Z"
    />
  </svg>
);
