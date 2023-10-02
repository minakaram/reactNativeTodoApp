
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Pages/Home";
import TodoDetails from "../Pages/TodoDetails";
const StackNavigator = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Todo-Details" component={TodoDetails} />
    </stack.Navigator>
  );
};

export default StackNavigator;
