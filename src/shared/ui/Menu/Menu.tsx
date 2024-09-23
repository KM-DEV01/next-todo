import { Menu as AntdMenu, MenuProps } from "antd";
import { FC } from "react";

import css from "./Menu.module.scss";

interface HeaderProps {
  menuItems: MenuProps["items"];
}

export const Menu: FC<HeaderProps> = ({ menuItems }) => {
  return (
    <AntdMenu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["home"]}
      items={menuItems}
      className={css.menu}
    />
  );
};
