import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      const { title, describtion } = action.payload;
      const duplicated = state.todos.some((el) => el.title === title);
      if (duplicated) {
        alert("Todo with the same title already exists.");
        return;
      }
      if (title) {
        const singleTodo = {
          id: Date.now(),
          done: false,
          title,
          describtion,
        };
        state.todos.push(singleTodo);
        AsyncStorage.setItem("todos", JSON.stringify(state.todos))
          .then(() => console.log("Todo saved to AsyncStorage"))
          .catch((error) =>
            console.log("Error saving todo to AsyncStorage:", error)
          );
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const deleted = state.todos.filter((el) => el.id !== id);
      state.todos = [...deleted];
      AsyncStorage.setItem("todos", JSON.stringify(state.todos))
    },
    updateTodo: (state, action) => {
      const { id } = action.payload;

      const updated = state.todos.find((el) => el.id === id);
      console.log(state.todos);
      if (updated) updated.done = !updated.done;
      AsyncStorage.setItem("todos", JSON.stringify(state.todos))
    },
  },
});
export const { addTodo, deleteTodo, updateTodo , setTodos } = TodoSlice.actions;
export default TodoSlice;
