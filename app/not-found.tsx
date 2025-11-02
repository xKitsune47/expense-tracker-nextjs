import React from "react";
import GradientText from "./_components/GradientText";
import AnimatedLink from "./_components/AnimatedLink";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

const notfound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center align-middle flex-col">
      <p className="text-xl">
        <GradientText text="404" /> - this resource does not exist
      </p>
      <AnimatedLink href="/" text="Click here to go back">
        <ArrowLongLeftIcon className="size-6" />
      </AnimatedLink>
    </div>
  );
};

export default notfound;
