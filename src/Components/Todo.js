import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slice/TodoSlice";
const Todo = ({ todo }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={style.todo}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Todo-Details", todo)}
    >
      <Text style={style.title}>{todo.title}</Text>
      <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
        <AntDesign
          name="checkcircleo"
          size={24}
          color={todo.done ? "green":"red"}
          style={{ marginHorizontal: 15}}
          onPress={() => dispatch(updateTodo({ id: todo.id }))}
        />
        <FontAwesome
          style={style.remove}
          name="remove"
          size={28}
          color="black"
          onPress={() => dispatch(deleteTodo({ id: todo.id }))}
        />
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  todo: {
    backgroundColor: Platform.OS === "web" ? "#634258" : "#36846B",
    marginVertical: 10,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    color: "white",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  remove: {
    color: "white",
  },
});
export default Todo;
