import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const _onChangeText = (value) => {
    setTitle(value);
  };

  const _onPressBtn = () => {
    if (title.length > 0) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          value={title}
          onChangeText={_onChangeText}
          style={styles.input}
        />
      </View>
      <View>
        <Button onPress={_onPressBtn} color={"#72867B"} title={"Ajouter"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  containerInput: {
    borderWidth: 1,
    borderColor: "#b6af9c",
    borderRadius: 4,
    paddingLeft: 10,
    width: "75%",
  },
  input: {
    paddingVertical: 4,
  },
});
export default TaskForm;
