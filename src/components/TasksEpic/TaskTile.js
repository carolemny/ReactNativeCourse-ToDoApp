import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Fontisto, Entypo, FontAwesome } from "@expo/vector-icons";

const TaskTile = ({ task, onTrashClick, onPencilClick, onCircleClick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => onCircleClick(task.id)}>
          {task.completed ? (
            <AntDesign name="checkcircleo" size={24} color="#77dd77" />
          ) : (
            <Entypo name="circle" size={24} color="#77dd77" />
          )}
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            {
              color: task.completed ? "#9ea7b4" : "#282b32",
              textDecorationLine: task.completed ? "line-through" : "none",
            },
          ]}
          ellipsizeMode="tail"
        >
          {task.title}
        </Text>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.icons}>
          <FontAwesome
            onPress={() => onPencilClick(task.id)}
            name="pencil"
            size={20}
            color="#a17b4a"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onTrashClick(task.id)}
          style={styles.icons}
        >
          <Fontisto name="trash" size={20} color="#ff6961" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f4faff",
    borderColor: "#f3f5f8",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 1,
    borderRadius: 8,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    color: "#282b32",
    fontWeight: "500",
    marginLeft: 15,
    marginRight: 20,
  },
  icons: {
    marginLeft: 15,
  },
});

export default TaskTile;
