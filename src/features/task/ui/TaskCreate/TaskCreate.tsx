"use client";

import { TaskStore } from "@/entities/task";
import { Button, Form, Input, Space, message } from "antd";

type FieldType = {
  task: string;
};

export const TaskCreate = () => {
  const [form] = Form.useForm<FieldType>();
  const { createTodo } = TaskStore;

  const onFinish = ({ task }: FieldType) => {
    const todo = {
      title: task,
      completed: false,
      userId: 1,
    };

    createTodo(todo);
    message.success("Submit success!");
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Space.Compact style={{ width: "100%" }}>
        <Form.Item
          style={{ width: "100%" }}
          name={"task"}
          rules={[{ required: true, message: "Задача не может быть пустой!" }]}
        >
          <Input placeholder="Введите задачу" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Добавить
        </Button>
      </Space.Compact>
    </Form>
  );
};
