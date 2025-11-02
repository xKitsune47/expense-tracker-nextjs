import React from "react";
import LoginButton from "../_components/LoginButton";
import { getSession } from "../_lib/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center align-middle h-full">
      <div className="w-xl p-10 flex flex-col items-center gap-4">
        <LoginButton />
      </div>
    </div>
  );
};

export default page;
