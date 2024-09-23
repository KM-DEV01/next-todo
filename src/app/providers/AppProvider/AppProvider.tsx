"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { spy } from "mobx";
import { FC } from "react";

spy((event) => {
  if (event.type === "action") {
    console.log(event);
  }
});

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};
