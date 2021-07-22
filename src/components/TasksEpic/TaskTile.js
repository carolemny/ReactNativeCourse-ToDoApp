import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Fontisto, Entypo } from "@expo/vector-icons";

const TaskTile = ({ id, title, status, onChangeStatus, onClick }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => onChangeStatus(id)}>
          {status ? (
            <AntDesign name="checkcircleo" size={24} color="#77dd77" />
          ) : (
            <Entypo name="circle" size={24} color="#77dd77" />
          )}
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            {
              color: status ? "#9ea7b4" : "#282b32",
              textDecorationLine: status ? "line-through" : "none",
            },
          ]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onClick(id)}>
        <Fontisto name="trash" size={24} color="#ff6961" />
      </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
    color: "#282b32",
    fontWeight: "500",
    marginHorizontal: 30,
  },
});

export default TaskTile;
