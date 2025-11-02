import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  href: string;
  text?: string;
  children?: ReactNode;
};

const AnimatedLink = ({ href, text, children }: Props) => {
  if (!text && !children) {
    throw new Error("NO CHILDREN OR TEXT PROVIDED IN AnimatedLink.tsx");
  }

  return (
    <Link
      href={href}
      className="transition-all hover:-translate-y-px hover:text-purple-600 flex flex-row">
      {children} {text}
    </Link>
  );
};

export default AnimatedLink;
