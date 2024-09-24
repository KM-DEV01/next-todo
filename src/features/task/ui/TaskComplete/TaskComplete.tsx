"use client";

import { Todo } from "@/shared/api/todos/model";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import { taskFeatures } from "../../model/taskFeatures";

interface Props {
  task: Todo;
}

export const TaskComplete = observer(({ task }: Props) => {
  const {
    updateTask,
    status: { updating, error },
  } = taskFeatures;

  const onChange = async (e: CheckboxChangeEvent, task: Todo) => {
    await updateTask({ ...task, completed: e.target.checked });
    console.log(toJS(error));
    if (error) return;
    console.log(taskFeatures);
  };

  return (
    <Checkbox
      disabled={updating}
      checked={task.completed}
      onChange={(e) => onChange(e, task)}
    />
  );
});
