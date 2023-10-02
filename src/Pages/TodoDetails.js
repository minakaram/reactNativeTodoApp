import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const params = useRoute().params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title : {params.title}</Text>
      <Text style={styles.description}>Description : {params.describtion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#634258",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#6d6087",
    width: "100%",
    borderRadius: 5,
    textTransform: "capitalize",
  },
  description: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    padding: 20,
    backgroundColor: "#60a0b0",
    width: "100%",
    borderRadius: 5,
    height: 400,
    textTransform: "capitalize",
    fontWeight: "700",
  },
});

export default TodoDetails;
