import { Todo } from "@/shared/api/todos/model";
import {
  createTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "@/shared/api/todos/todos";
import { makeAutoObservable, runInAction } from "mobx";

class TaskStore {
  taskList: Todo[] = [];
  task?: Todo;
  isLoading = false;
  taskListError = "";
  taskError = "";
  isUpdateLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getTaskList = async () => {
    try {
      this.isLoading = true;
      const data = await getTodos();

      runInAction(() => {
        this.taskList = data;
      });
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.taskListError = error.message;
        });
      }
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  getTask = async (id: Todo["id"]) => {
    try {
      this.isLoading = true;
      const data = await getTodo(id);

      runInAction(() => {
        this.task = data;
      });
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.taskError = error.message;
        });
      }
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  updateTodo = async (todo: Todo) => {
    try {
      this.isUpdateLoading = true;
      await updateTodo(todo);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  createTodo = async (todo: Omit<Todo, "id">) => {
    try {
      const data = await createTodo(todo);

      runInAction(() => {
        this.taskList.unshift(data);
      });
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
    }
  };
}

export const TaskStoreInstance = new TaskStore();
