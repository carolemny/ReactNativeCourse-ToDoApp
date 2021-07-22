import React, { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import CounterContainer from "./CounterContainer";
import FloattingButton from "../_Shared/FloatingButton";

const TasksContainer = () => {
  const [tasks, setTasks] = useState([
    { id: new Date().getTime(), title: "Mon exemple de note", completed: true },
  ]);
  const [isFormOpened, setIsFormOpened] = useState(false);

  const onAddTask = (title) => {
    const newTask = {
      id: new Date().getTime(),
      title: title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const onChangeStatus = (id) => {
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id === id) {
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed,
        });
      } else {
        newTasks.push(task);
      }
    });
    setTasks(newTasks);
  };

  const onDelete = (id) => {
    console.log("onDelete");
    let newTasks = [];
    tasks.forEach((task) => {
      if (task.id !== id) {
        newTasks.push(task);
      }
    });
    setTasks(newTasks);
  };

  const onClick = (id) => {
    Alert.alert(
      "Suppression d'une tâche",
      "Es-tu sûr(e) de vouloir supprimer cette tâche ?",
      [
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "Supprimer définitivement",
          onPress: () => {
            console.log("OK Pressed");
            onDelete(id);
          },
        },
      ]
    );
  };

  const getCompletedTasks = () => {
    let counter = 0;
    tasks.forEach((task) => {
      if (task.completed) {
        counter++;
      }
    });
    return counter;
  };

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <View style={styles.container}>
      {isFormOpened && <TaskForm onAddTask={onAddTask} />}
      <CounterContainer
        nbCompletedTasks={getCompletedTasks}
        nbTasks={tasks.length}
      />
      <TasksList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onClick={onClick}
      />
      <FloattingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

export default TasksContainer;
