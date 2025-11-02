"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import gitlogo from "../../public/github-mark-white.svg";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="px-4 py-2 bg-gray-300 rounded">Loading...</button>
    );
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 gap-4 transition-all duration-300 flex flex-row">
          Sign out
          <ArrowRightStartOnRectangleIcon className="size-6" />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("github")}
      className="px-4 py-2 bg-black text-white rounded hover:bg-purple-800 flex flex-row items-center gap-4 transition-all duration-300 ">
      Sign in using GitHub
      <div className="h-8 w-8 flex">
        <Image src={gitlogo} alt="github logo" />
      </div>
    </button>
  );
}
