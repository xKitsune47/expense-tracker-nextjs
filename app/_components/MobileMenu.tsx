"use client";

import { useState, useEffect, useRef } from "react";
import AnimatedLink from "./AnimatedLink";
import { useSession } from "next-auth/react";
import {
  ArrowRightEndOnRectangleIcon,
  HomeIcon,
  PresentationChartBarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside both the button and the menu
      if (
        containerRef.current &&
        buttonRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 p-2 md:hidden z-50"
        aria-label="Toggle menu">
        <span
          className={`w-6 h-0.5 bg-purple-950 rounded-full transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}></span>
        <span
          className={`w-6 h-0.5 bg-purple-950 rounded-full transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}></span>
        <span
          className={`w-6 h-0.5 bg-purple-950 rounded-full transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}></span>
      </button>

      {/* Expanded Menu Items */}
      <div
        ref={containerRef}
        className={`md:hidden absolute left-0 right-0 top-full bg-purple-200 rounded-3xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out py-2 mt-1 ${
          isOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}>
        <nav className="flex flex-col py-2 px-4 items-end">
          <div onClick={() => setIsOpen(false)}>
            <AnimatedLink href="/">
              <div className="flex items-center gap-3 px-4 py-3 text-purple-950 hover:bg-purple-300 rounded-xl transition-all duration-300">
                <span className="text-base font-medium">Home</span>
                <HomeIcon className="size-8" />
              </div>
            </AnimatedLink>
          </div>

          {session && (
            <div onClick={() => setIsOpen(false)}>
              <AnimatedLink href="/dashboard">
                <div className="flex items-center gap-3 px-4 py-3 text-purple-950 hover:bg-purple-300 rounded-xl transition-all duration-300">
                  <span className="text-base font-medium">Dashboard</span>
                  <PresentationChartBarIcon className="size-8" />
                </div>
              </AnimatedLink>
            </div>
          )}

          <div onClick={() => setIsOpen(false)}>
            <AnimatedLink href={session ? "/account" : "/sign-in"}>
              <div className="flex items-center gap-3 px-4 py-3 text-purple-950 hover:bg-purple-300 rounded-xl transition-all duration-300">
                <span className="text-base font-medium">
                  {session ? "Account" : "Sign In"}
                </span>
                {session ? (
                  <UserIcon className="size-8" />
                ) : (
                  <ArrowRightEndOnRectangleIcon className="size-8" />
                )}
              </div>
            </AnimatedLink>
          </div>
        </nav>
      </div>
    </>
  );
}
