import React from "react";
import { FlatList } from "react-native";

import TaskTile from "./TaskTile";

const TasksList = ({ tasks, onTrashClick, onPencilClick, onCircleClick }) => {
  const _renderItem = ({ item }) => (
    <TaskTile
      task={{ id: item.id, title: item.title, completed: item.completed }}
      onTrashClick={onTrashClick}
      onPencilClick={onPencilClick}
      onCircleClick={onCircleClick}
    ></TaskTile>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TasksList;
