import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

let nextID = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextID++,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
