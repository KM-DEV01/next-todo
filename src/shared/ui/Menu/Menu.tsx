"use client";

import { getSelectedPath } from "@/shared/lib/getSelectedPath";
import { Menu as AntdMenu } from "antd";
import { usePathname } from "next/navigation";
import { FC } from "react";

import css from "./Menu.module.scss";
import { menuItems } from "./menuItems";

export const Menu: FC = () => {
  const pathname = usePathname();

  return (
    <AntdMenu
      selectedKeys={[pathname ? getSelectedPath(pathname) : ""]}
      theme="dark"
      mode="horizontal"
      items={menuItems}
      className={css.menu}
    />
  );
};
