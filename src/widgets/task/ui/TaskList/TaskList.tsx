"use client";

import { TaskCard, TaskStore } from "@/entities/task";
import { TaskComplete } from "@/features/task";
import { List, message } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const TaskList = observer(() => {
  const { getTaskList, isLoading, taskListError, taskList } = TaskStore;

  useEffect(() => {
    getTaskList();
  }, []);

  if (taskListError && !isLoading) {
    message.error(taskListError);
    return null;
  }

  return (
    <List
      loading={isLoading}
      dataSource={taskList}
      renderItem={(item) => (
        <TaskCard taskCard={item} action={<TaskComplete task={item} />} />
      )}
    />
  );
});
