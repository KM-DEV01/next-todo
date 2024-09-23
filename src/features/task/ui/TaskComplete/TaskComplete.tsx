"use client";

import { TaskStore } from "@/entities/task";
import { Todo } from "@/shared/api/todos/model";
import { Checkbox, message } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { observer } from "mobx-react-lite";

interface Props {
  task: Todo;
}

export const TaskComplete = observer(({ task }: Props) => {
  const { updateTodo, isUpdateLoading, error } = TaskStore;

  const onChange = async (e: CheckboxChangeEvent, task: Todo) => {
    await updateTodo({ ...task, completed: e.target.checked });
    if (!error && !isUpdateLoading) message.success("Update success!");
  };

  return (
    <Checkbox
      disabled={isUpdateLoading}
      checked={task.completed}
      onChange={(e) => onChange(e, task)}
    />
  );
});
