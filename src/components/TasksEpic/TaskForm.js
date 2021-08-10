import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";

import { addTask } from "../../redux/actions";

const TaskForm = ({ toggleForm, taskToUpdate, onUpdate }) => {
  const [title, setTitle] = useState(taskToUpdate.title);
  const dispatch = useDispatch();

  const _onChangeText = (value) => {
    setTitle(value);
  };

  const _onPressBtn = () => {
    if (title.length > 0) {
      dispatch(addTask(title));
      toggleForm();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          value={title}
          onChangeText={_onChangeText}
          style={styles.input}
          autoFocus
        />
      </View>
      <View>
        <Button
          onPress={
            taskToUpdate.id
              ? () => onUpdate({ ...taskToUpdate, title })
              : _onPressBtn
          }
          color={"#72867B"}
          title={taskToUpdate.id ? "Modifier" : "Ajouter"}
        />
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
