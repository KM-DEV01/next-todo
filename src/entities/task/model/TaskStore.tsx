import { Todo } from "@/shared/api/todos/model";
import {
  createTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "@/shared/api/todos/todos";
import { message } from "antd";
import { makeAutoObservable, runInAction } from "mobx";

class TaskStore {
  taskList: Todo[] = [];
  task?: Todo;
  isLoading = false;
  error = "";
  isUpdateLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  _handleError = (error: unknown) => {
    if (error instanceof Error) {
      runInAction(() => {
        this.error = error.message;
        message.error(error.message);
      });
    }
  };

  private _setTaskList = (tasks: Todo[]) => {
    runInAction(() => {
      this.taskList = tasks.sort((a, b) => b.id - a.id);
    });
  };

  getTaskList = async () => {
    this.isLoading = true;
    this.error = "";
    try {
      const data = await getTodos();
      this._setTaskList(data);
    } catch (error) {
      this._handleError(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  getTask = async (id: string) => {
    this.isLoading = true;
    this.error = "";
    try {
      const data = await getTodo(id);

      runInAction(() => {
        this.task = data;
      });
    } catch (error) {
      this._handleError(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  updateTodo = async (todo: Todo) => {
    this.isUpdateLoading = true;
    this.error = "";
    try {
      const data = await updateTodo(todo);
      const updatedList = this.taskList.map((item) => {
        if (item.id === data.id) return data;
        return item;
      });
      this._setTaskList(updatedList);
    } catch (error) {
      this._handleError(error);
    } finally {
      runInAction(() => {
        this.isUpdateLoading = false;
      });
    }
  };

  createTodo = async (todo: Omit<Todo, "id">) => {
    this.isLoading = true;
    this.error = "";

    try {
      const data = await createTodo(todo);

      runInAction(() => {
        this.taskList.unshift(data);
      });
    } catch (error) {
      this._handleError(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export const TaskStoreInstance = new TaskStore();
