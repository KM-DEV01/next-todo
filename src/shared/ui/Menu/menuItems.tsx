import { CheckSquareOutlined, HomeOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";

// TODO: Добавить стилизацию
export const menuItems: MenuProps["items"] = [
  {
    label: <Link href="/">Home</Link>,
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/todo">Todo</Link>,
    key: "/todo",
    icon: <CheckSquareOutlined />,
  },
];
