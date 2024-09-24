import { taskStore } from "@/entities/task";
import { Todo } from "@/shared/api/todos/model";
import { createTodo, updateTodo } from "@/shared/api/todos/todos";
import { StatusStore } from "@/shared/lib/statusStore";
import { makeAutoObservable, runInAction } from "mobx";

export class TaskFeatures {
  status: StatusStore;
  private _taskStore: typeof taskStore;

  constructor() {
    this.status = new StatusStore();
    this._taskStore = taskStore;
    makeAutoObservable(this);
  }

  createTask = async (todo: Omit<Todo, "id">) => {
    this.status.loading = true;
    this.status.error = "";

    await createTodo(todo)
      .then((data) => {
        runInAction(() => {
          this._taskStore.taskList = [data, ...this._taskStore.taskList];
        });
      })
      .catch((error) => {
        this.status.handleError(error);
      })
      .finally(() => {
        runInAction(() => {
          this.status.loading = false;
        });
      });
  };

  updateTask = async (task: Todo) => {
    this.status.updating = true;
    this.status.error = "";

    await updateTodo(task)
      .then((data) => {
        const updatedList = this._taskStore.taskList.map((item) => {
          if (item.id === data.id) return data;
          return item;
        });
        runInAction(() => {
          this._taskStore.taskList = updatedList;
        });
      })
      .catch((error) => {
        this.status.handleError(error);
      })
      .finally(() => {
        runInAction(() => {
          this.status.updating = false;
        });
      });
  };
}

export const taskFeatures = new TaskFeatures();
