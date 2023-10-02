import { View, Text } from "react-native";
import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const Todos = () => {
  const { todos } = useSelector((state) => state.todo);

  return (
    <View style={{ width: "100%" }}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </View>
  );
};

export default Todos;
