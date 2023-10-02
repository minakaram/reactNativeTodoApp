import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import CompletedTodos from "../Pages/CompletedTodos";
import InCompletedTodos from "../Pages/InCompletedTodos";
const Router = () => {
  const tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen
          name="main"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <tab.Screen name="Completed-Todos" component={CompletedTodos} />
        <tab.Screen name="In-Completed-Todos" component={InCompletedTodos} />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
