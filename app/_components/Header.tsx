import React from "react";
import { getSession } from "../_lib/auth";
import AnimatedLink from "./AnimatedLink";
import MobileMenu from "./MobileMenu";
import {
  ArrowRightEndOnRectangleIcon,
  HomeIcon,
  PresentationChartBarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Header = async () => {
  const session = getSession();

  return (
    <div className="fixed py-4 text-2xl flex flex-row w-full justify-center z-99">
      <div className="relative flex flex-row w-3/4 lg:w-1/2 justify-between bg-purple-200 py-4 px-8 text-purple-950 items-center rounded-full shadow-md md:rounded-full">
        <AnimatedLink href="/">{process.env.APP_NAME}</AnimatedLink>

        {/* wide viewport menu */}
        <div className="md:flex flex-row gap-16 hidden">
          <AnimatedLink href="/">
            <HomeIcon className="size-8" />
          </AnimatedLink>
          {(await session) && (
            <AnimatedLink href="/dashboard">
              <PresentationChartBarIcon className="size-8" />
            </AnimatedLink>
          )}

          <AnimatedLink href={(await session) ? "/account" : "sign-in"}>
            {(await session) ? (
              <UserIcon className="size-8" />
            ) : (
              <ArrowRightEndOnRectangleIcon className="size-8" />
            )}
          </AnimatedLink>
        </div>

        {/* narrow viewport menu */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
