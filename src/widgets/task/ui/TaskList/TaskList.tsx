"use client";

import { TaskCard, taskStore } from "@/entities/task";
import { TaskComplete } from "@/features/task";
import { List } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const TaskList = observer(() => {
  const {
    getTaskList,
    taskList,
    status: { loading },
  } = taskStore;

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <List
      loading={loading}
      dataSource={taskList}
      renderItem={(item) => (
        <TaskCard taskCard={item} action={<TaskComplete task={item} />} />
      )}
    />
  );
});
