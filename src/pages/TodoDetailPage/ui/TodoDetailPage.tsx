import { TaskDetail } from "@/widgets/task";

import css from "./TodoDetailPage.module.scss";

export const TodoDetailPage = () => {
  return (
    <div className={css.page}>
      <TaskDetail />
    </div>
  );
};
