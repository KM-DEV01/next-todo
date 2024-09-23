import coolCat from "@/shared/assets/gif/cat-meme.gif";
import Title from "antd/es/typography/Title";
import Image from "next/image";

import css from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={css.page}>
      <Title>Welcome!</Title>
      <Image src={coolCat} alt="Cool Cat" />
    </div>
  );
};
