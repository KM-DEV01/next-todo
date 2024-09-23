import { TaskStore } from "@/entities/task";
import { Todo } from "@/shared/api/todos/model";
import { Checkbox, Spin } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { FC } from "react";

interface Props {
  task: Todo;
}

export const TaskComplete: FC<Props> = ({ task }) => {
  const { updateTodo, isUpdateLoading } = TaskStore;

  const onChange = (e: CheckboxChangeEvent, task: Todo) => {
    updateTodo({ ...task, completed: e.target.checked });

    console.log(`Task ${task.id} is checked = ${e.target.checked}`);
  };

  return isUpdateLoading ? (
    <Spin />
  ) : (
    <Checkbox onChange={(e) => onChange(e, task)} />
  );
};
