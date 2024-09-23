import { TaskCreate } from "@/features/task";
import { TaskList } from "@/widgets/task";

import css from "./TodoPage.module.scss";

export const TodoPage = () => {
  return (
    <div className={css.page}>
      <div style={{ width: "100%" }}>
        <TaskCreate />
        <TaskList />
      </div>
    </div>
  );
};
