import { Todo } from "@/shared/api/todos/model";
import { Flex } from "antd";
import Text from "antd/es/typography/Text";
import { FC, ReactNode } from "react";

interface Props {
  taskCard: Todo;
  action?: ReactNode;
}

export const TaskCard: FC<Props> = ({ taskCard, action }) => {
  return (
    <Flex gap={8}>
      {action ? action : null}
      <Text
        delete={taskCard.completed}
        type={taskCard.completed ? "secondary" : undefined}
      >
        {taskCard.title}
      </Text>
    </Flex>
  );
};
