import { Todo } from "@/shared/api/todos/model";
import { Flex } from "antd";
import classNames from "classnames";
import Link from "next/link";
import { FC, ReactNode } from "react";

import css from "./TaskCard.module.scss";

interface Props {
  taskCard: Todo;
  action?: ReactNode;
}

export const TaskCard: FC<Props> = ({ taskCard, action }) => {
  const isCompleted = taskCard.completed;

  return (
    <Flex gap={8} className={css.card}>
      {action && action}
      <Link
        href={`todo/${taskCard.id}`}
        className={classNames(css.card__title, {
          [css.card__title_delete]: isCompleted,
        })}
      >
        {taskCard.title}
      </Link>
    </Flex>
  );
};
