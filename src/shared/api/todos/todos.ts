import { httpClient } from "../httpClient/httpClient";
import { Todo } from "./model";

const SLUG = "todos";

export const getTodos = () => {
  return httpClient.get(SLUG).json<Todo[]>();
};

export const getTodo = (id: Todo["id"]) => {
  return httpClient.get(`${SLUG}/${id}`).json<Todo>();
};

export const updateTodo = (todo: Todo) => {
  return httpClient.put(`${SLUG}/${todo.id}`, { json: todo }).json<Todo>();
};

export const createTodo = (todo: Omit<Todo, "id">) => {
  return httpClient.post(SLUG, { json: todo }).json<Todo>();
};
