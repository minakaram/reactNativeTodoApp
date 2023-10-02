import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Todos from "../Components/Todos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodos } from "../redux/slice/TodoSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [describtion, setDescribtion] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    trackStorage();
  }, []);

  const trackStorage = async () => {
    try {
      const tracked = await AsyncStorage.getItem("todos");
      if (tracked) {
        dispatch(setTodos(JSON.parse(tracked)));
      }
    } catch (error) {
      console.log("Error retrieving todos from AsyncStorage:", error);
    }
  };
;

  const createTodo = async () => {
    if (!title) {
      setShowSuccess(false);
      alert("Title is required");
      return;
    }

    dispatch(addTodo({ title, describtion }));
    setTitle("");
    setDescribtion("");
    setShowSuccess(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>To Do App</Text>
        <TextInput
          onChangeText={(val) => setTitle(val)}
          style={styles.input}
          placeholder="Title"
          value={title}
        />
        <TextInput
          onChangeText={(val) => setDescribtion(val)}
          style={styles.input}
          placeholder="Description"
          value={describtion}
        />

        {showSuccess && (
          <Text style={{ marginVertical: 10 }}>Added Successfully</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={createTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        {/* <View style={styles.divider} />
        <Todos
          todos={todos}
          style={{ width: "100%" }}
        />   */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    minHeight: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#03aca0",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    width: "100%",
    borderColor: "gray",
    backgroundColor: "gray",
    height: 2,
    marginVertical: 20,
  },
});

export default Home;
