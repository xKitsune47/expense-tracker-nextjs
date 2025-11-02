import React from "react";
import { getSession } from "../_lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import LoginButton from "../_components/LoginButton";

type UserData = {
  name: string;
  email?: string;
  image: string;
  id: string;
};

const page = async () => {
  const session = await getSession();

  if (!session || !session.user) {
    redirect("/");
  }

  const user: UserData = session.user as UserData;

  return (
    <div className="w-full flex justify-center">
      <div className="bg-purple-200 py-8 px-4 grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 w-full xl:w-1/2 rounded-4xl gap-8">
        <div className="flex items-center justify-center">
          <div className="relative md:w-64 md:h-64 w-48 h-48">
            <Image
              src={user.image}
              alt={`${user.name}'s profile`}
              className="rounded-full object-cover"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="flex flex-col">
            <p className="text-purple-400 text-sm">Username</p>
            <p className="text-purple-700 text-xl font-bold">
              {user.name || "err"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-purple-400 text-sm">Email</p>
            <p className="text-purple-700 text-xl font-bold">
              {user.email || "N/A"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-purple-400 text-sm">User&apos;s ID</p>
            <p className="text-purple-700 text-xl font-bold">
              {user.id || "N/A"}
            </p>
          </div>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default page;
