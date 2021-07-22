import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const FloatingButton = ({ toggleForm, isFormOpened }) => {
  return (
    <TouchableOpacity
      onPress={() => toggleForm()}
      style={[
        styles.container,
        {
          backgroundColor: isFormOpened ? "lightgrey" : "#72867B",
        },
      ]}
    >
      <Text style={styles.title}>
        {!isFormOpened && (
          <MaterialIcons name="playlist-add" size={24} color="#fff" />
        )}
        {isFormOpened && <Ionicons name="close" size={24} color="#fff" />}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 35,
    color: "#fff",
  },
});

export default FloatingButton;
