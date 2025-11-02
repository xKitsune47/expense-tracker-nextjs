import React, { ReactNode } from "react";
import DashboardMenu from "../_components/DashboardMenu";

const layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="flex md:flex-row flex-col gap-8">
      <DashboardMenu />
      {children}
    </div>
  );
};

export default layout;
