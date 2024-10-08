import { Todo } from "@/shared/api/todos/model";
import { getTodo, getTodos } from "@/shared/api/todos/todos";
import { StatusStore } from "@/shared/lib/statusStore";
import { makeAutoObservable, runInAction } from "mobx";

class TaskStore {
  status: StatusStore;
  private _taskList: Todo[] = [];
  private _task?: Todo = undefined;

  constructor() {
    this.status = new StatusStore();
    makeAutoObservable(this);
  }

  set taskList(value: Todo[]) {
    this._taskList = value;
  }

  set task(value: Todo) {
    this._task = value;
  }

  get taskList() {
    return this._taskList;
  }

  get task(): Todo | undefined {
    return this._task;
  }

  getTaskList = async () => {
    this.status.loading = true;
    this.status.error = "";

    await getTodos()
      .then((data) => {
        runInAction(() => {
          this.taskList = data;
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

  getTask = async (id: string) => {
    this.status.loading = true;
    this.status.error = "";

    await getTodo(id)
      .then((data) => {
        runInAction(() => {
          this.task = data;
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
}

export const taskStore = new TaskStore();
