"use client";

import { Todo } from "@/shared/api/todos/model";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { observer } from "mobx-react-lite";

import { taskFeatures } from "../../model/taskFeatures";

interface Props {
  task: Todo;
}

export const TaskComplete = observer(({ task }: Props) => {
  const {
    updateTask,
    status: { updating },
  } = taskFeatures;

  const onChange = async (e: CheckboxChangeEvent, task: Todo) => {
    updateTask({ ...task, completed: e.target.checked });
  };

  return (
    <Checkbox
      disabled={updating}
      checked={task.completed}
      onChange={(e) => onChange(e, task)}
    />
  );
});
