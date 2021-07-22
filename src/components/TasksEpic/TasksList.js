import React from "react";
import { FlatList } from "react-native";

import TaskTile from "./TaskTile";

const TasksList = ({ tasks, onChangeStatus, onClick }) => {
  const _renderItem = ({ item }) => (
    <TaskTile
      title={item.title}
      status={item.completed}
      id={item.id}
      onChangeStatus={onChangeStatus}
      onClick={onClick}
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
