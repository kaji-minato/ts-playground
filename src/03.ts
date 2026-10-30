import type { Todo } from "./types.js";
import { printTodo } from "./utils/printTodo.js";
import assert from "assert";

const todo: Todo = {
  name: "Learn TypeScript",
  priority: 3,
  isDone: false,
  deadline: new Date(2026, 9, 11, 9, 45),
};


const updatedTodo = {
  ...todo, 
  deadline: new Date(2026, 9, 30),
  isDone:true,
}; 

assert.notEqual(todo, updatedTodo);

printTodo(updatedTodo);