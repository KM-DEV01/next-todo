import { Todo } from "@/shared/api/todos/model";
import { Flex } from "antd";
import Text from "antd/es/typography/Text";
import { FC, ReactNode } from "react";

import css from "./TaskDetailCard.module.scss";

interface Props {
  taskCard: Todo;
  action?: ReactNode;
}

export const TaskDetailCard: FC<Props> = ({ taskCard, action }) => {
  const isCompleted = taskCard.completed;

  return (
    <Flex gap={8} className={css.card}>
      {isCompleted ? (
        <Text className={css.card__title_success}>Completed</Text>
      ) : (
        <Text className={css.card__title_error}>Not completed</Text>
      )}

      {action}
      <Text>{taskCard.title}</Text>
    </Flex>
  );
};
