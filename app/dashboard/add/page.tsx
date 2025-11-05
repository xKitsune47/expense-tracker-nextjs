import React from "react";
import Form from "@/app/_components/Form";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-purple-950">Add a new expense</h2>
      <Form />
    </div>
  );
};

export default page;
