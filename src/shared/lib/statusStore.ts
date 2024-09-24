import { message } from "antd";
import { makeAutoObservable, runInAction } from "mobx";

export class StatusStore {
  private _loading = false;
  private _updating = false;
  private _error = "";

  constructor() {
    makeAutoObservable(this);
  }

  get loading() {
    return this._loading;
  }

  get updating() {
    return this._updating;
  }

  get error() {
    return this._error;
  }

  set loading(value: boolean) {
    this._loading = value;
  }

  set updating(value: boolean) {
    this._updating = value;
  }

  set error(value: string) {
    this._error = value;
  }

  handleError = (error: unknown) => {
    runInAction(() => {
      if (error instanceof Error) {
        this.error = error.message;
        message.error(error.message);
      }
    });
  };
}
