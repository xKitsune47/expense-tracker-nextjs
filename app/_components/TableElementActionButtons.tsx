"use client";

import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

const TableElementActionButtons = ({
  itemId,
  userId,
}: {
  itemId: number;
  userId: string;
}) => {
  const onEditAction = () => {
    console.log("edit", itemId, userId);
  };
  const onDeleteAction = async () => {
    console.log("delete", itemId, userId);

    const res = await fetch("/api/dashboard", {
      method: "DELETE",
      body: JSON.stringify({ itemId: itemId, userId: userId }),
    });
    const data = await res.json();

    if (data) console.log(data);
  };

  return (
    <>
      <td className="p-2 flex items-center justify-center gap-4">
        <PencilSquareIcon
          className="size-6 text-purple-950 hover:text-purple-600 transition-all duration-200 cursor-pointer"
          onClick={onEditAction}
        />
        <TrashIcon
          className="size-6 text-red-800 hover:text-red-500 transition-all duration-200 cursor-pointer"
          onClick={onDeleteAction}
        />
      </td>
    </>
  );
};

export default TableElementActionButtons;
