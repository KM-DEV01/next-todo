"use client";

import { TaskCard, TaskStore } from "@/entities/task";
import { TaskComplete } from "@/features/task";
import { List, message } from "antd";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const TaskList = observer(() => {
  const { getTaskList, isLoading, taskList, error } = TaskStore;

  useEffect(() => {
    getTaskList();
  }, []);

  if (error && !isLoading) {
    message.error(error);
  }

  // realization without 'toJS' function
  // return taskList.map((item) => (
  //   <TaskCard
  //     key={item.id}
  //     taskCard={item}
  //     action={<TaskComplete task={item} />}
  //   />
  // ));

  return (
    <List
      loading={isLoading}
      dataSource={toJS(taskList)}
      renderItem={(item) => (
        <TaskCard taskCard={item} action={<TaskComplete task={item} />} />
      )}
    />
  );
});
