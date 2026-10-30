import { expect, test } from "vitest";
import type { Todo } from "../types.js";
import { isOverdue } from "./todoStatus.js";

const pending: Todo = {
  name: "基礎物理3の宿題",
  priority: 1,
  isDone: false,
  deadline: new Date(2026, 9, 2, 12, 0),
};
const completed: Todo = {
  name: "基礎物理3の宿題",
  priority: 1,
  isDone: true,
  deadline: new Date(2026, 9, 2, 12, 0),
};

test("未完了なら、期限を過ぎたときだけ期限切れになる", () => {
  expect(isOverdue(pending, new Date(2026, 9, 2, 11, 59, 59, 999))).toBe(false);
  expect(isOverdue(pending, new Date(2026, 9, 2, 12, 0))).toBe(false);
  expect(isOverdue(pending, new Date(2026, 9, 2, 12, 0, 0, 1))).toBe(true);
});

test("完了済みなら、期限の前後によらず期限切れにはしない", () => {
  expect(isOverdue(completed, new Date(2026, 9, 2, 11, 59, 59, 999))).toBe(false);
  expect(isOverdue(completed, new Date(2026, 9, 2, 12, 0))).toBe(false);
  expect(isOverdue(completed, new Date(2026, 9, 2, 12, 0, 0, 1))).toBe(false);
});