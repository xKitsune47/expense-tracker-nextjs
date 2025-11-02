"use client";

import React from "react";
import AnimatedLink from "./AnimatedLink";
import { usePathname } from "next/navigation";
import {
  Bars4Icon,
  PlusIcon,
  TableCellsIcon,
  ChartPieIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const DashboardMenu = () => {
  const path = usePathname().split("/");

  return (
    <div className="bg-purple-200 py-5 px-8 rounded-3xl md:w-1/4 w-full flex flex-col gap-4 h-fit">
      <AnimatedLink href="/dashboard">
        <div
          className={`flex items-center gap-3 px-4 py-3 text-purple-950 ${
            path[path.length - 1] === "dashboard"
              ? "bg-purple-300"
              : "hover:bg-purple-300"
          } rounded-xl transition-all duration-300 w-full`}>
          <Bars4Icon className="size-6" />
          Overview
        </div>
      </AnimatedLink>
      <AnimatedLink href="/dashboard/add">
        <div
          className={`flex items-center gap-3 px-4 py-3 text-purple-950 ${
            path[path.length - 1] === "add"
              ? "bg-purple-300"
              : "hover:bg-purple-300"
          } rounded-xl transition-all duration-300 w-full`}>
          <PlusIcon className="size-6" />
          Add expense
        </div>
      </AnimatedLink>
      <AnimatedLink href="/dashboard/table">
        <div
          className={`flex items-center gap-3 px-4 py-3 text-purple-950 ${
            path[path.length - 1] === "table"
              ? "bg-purple-300"
              : "hover:bg-purple-300"
          } rounded-xl transition-all duration-300 w-full`}>
          <TableCellsIcon className="size-6" />
          Table
        </div>
      </AnimatedLink>
      <AnimatedLink href="/dashboard/charts">
        <div
          className={`flex items-center gap-3 px-4 py-3 text-purple-950 ${
            path[path.length - 1] === "charts"
              ? "bg-purple-300"
              : "hover:bg-purple-300"
          } rounded-xl transition-all duration-300 w-full`}>
          <ChartPieIcon className="size-6" />
          Charts
        </div>
      </AnimatedLink>
      <AnimatedLink href="/dashboard/download">
        <div
          className={`flex items-center gap-3 px-4 py-3 text-purple-950 ${
            path[path.length - 1] === "download"
              ? "bg-purple-300"
              : "hover:bg-purple-300"
          } rounded-xl transition-all duration-300 w-full`}>
          <ArrowDownTrayIcon className="size-6" />
          Download report
        </div>
      </AnimatedLink>
    </div>
  );
};

export default DashboardMenu;
