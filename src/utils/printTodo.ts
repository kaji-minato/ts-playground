import dayjs from "dayjs";
import type { Todo } from "../types.js";

export const printTodo = (todo: Todo): void => {
  const todoSummary =
    `(優先度: ${todo.priority}) ${todo.name}` +
    ` 期日: ${dayjs(todo.deadline).format("YYYY/MM/DD HH:mm")}`+
    `(isDone: ${todo.isDone})`;
  console.log(todoSummary);
};