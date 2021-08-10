import React, { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import CounterContainer from "./CounterContainer";
import FloattingButton from "../_Shared/FloatingButton";
import { getTasks } from "../../redux/selectors";
import { deleteTask, updateTask } from "../../redux/actions";

const TasksContainer = () => {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState({});
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  const onTrashClick = (id) => {
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
            dispatch(deleteTask(id));
          },
        },
      ]
    );
  };

  const onPencilClick = (idTask) => {
    setTaskToUpdate(tasks.find(({ id }) => id === idTask));
    toggleForm();
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
    if (isFormOpened) {
      setTaskToUpdate({});
    }
    setIsFormOpened(!isFormOpened);
  };

  const onUpdate = (updatedTask) => {
    toggleForm();
    dispatch(updateTask(updatedTask));
  };

  const onCircleClick = (taskId) => {
    const taskWithNewStatus = tasks.find(({ id }) => id === taskId);
    dispatch(
      updateTask({
        ...taskWithNewStatus,
        completed: !taskWithNewStatus.completed,
      })
    );
  };

  return (
    <View style={styles.container}>
      {isFormOpened && (
        <TaskForm
          toggleForm={toggleForm}
          taskToUpdate={taskToUpdate}
          onUpdate={onUpdate}
        />
      )}
      <CounterContainer
        nbCompletedTasks={getCompletedTasks}
        nbTasks={tasks.length}
      />
      <TasksList
        tasks={tasks}
        onTrashClick={onTrashClick}
        onPencilClick={onPencilClick}
        onCircleClick={onCircleClick}
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
