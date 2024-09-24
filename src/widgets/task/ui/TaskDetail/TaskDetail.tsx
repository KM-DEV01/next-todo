"use client";

import { TaskDetailCard, taskStore } from "@/entities/task";
import { Flex, Spin } from "antd";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export const TaskDetail = observer(() => {
  const {
    getTask,
    task,
    status: { loading, error },
  } = taskStore;

  const param = useParams<{ id: string }>();

  useEffect(() => {
    if (param?.id) getTask(param.id);
  }, [param]);

  return (
    <Flex gap={8} vertical style={{ width: "100%" }}>
      <Spin spinning={loading} style={{ width: "100%" }}>
        {!error && task && <TaskDetailCard taskCard={task} />}
        {error && (
          <>
            <p>{error}</p>
          </>
        )}
        <Link href="/todo">Назад</Link>
      </Spin>
    </Flex>
  );
});
