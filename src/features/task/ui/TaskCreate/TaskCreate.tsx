"use client";

import { Button, Form, Input, Space } from "antd";

import { taskFeatures } from "../../model/taskFeatures";

type FieldType = {
  task: string;
};

export const TaskCreate = () => {
  const [form] = Form.useForm<FieldType>();
  const {
    createTask,
    status: { error },
  } = taskFeatures;

  const onFinish = async ({ task }: FieldType) => {
    const todo = {
      title: task,
      completed: false,
      userId: 1,
    };

    await createTask(todo);
    if (error) return;
    form.resetFields(["task"]);
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
