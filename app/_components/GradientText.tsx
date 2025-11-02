import React, { ReactNode } from "react";

type Props = { children?: ReactNode; text?: string };

const GradientText = ({ children, text }: Props) => {
  if (!children && !text) {
    throw new Error("NO CHILDREN OR TEXT PROVIDED IN GradientText.tsx");
  }

  return (
    <span className="animated-text font-bold bg-linear-to-r from-purple-800 via-purple-500 to-purple-800 text-transparent bg-clip-text">
      {children || text}
    </span>
  );
};

export default GradientText;
