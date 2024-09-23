import { AppProvider } from "@/app/providers";
import "@/app/styles";
import { Menu } from "@/shared/ui/Menu/Menu";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Roboto } from "next/font/google";

import css from "./layout.module.scss";

const roboto = Roboto({ subsets: ["cyrillic"], weight: ["400", "700"] });

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <AppProvider>
          <Layout className={css.layout}>
            <Header className={css.layout__header}>
              <Menu />
            </Header>
            <Content className={css.layout__content}>{children}</Content>
            <Footer className={css.layout__footer}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </AppProvider>
      </body>
    </html>
  );
}
