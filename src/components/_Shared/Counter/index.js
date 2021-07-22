import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Counter = ({ nb, title }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            styles.counter,
            { textAlign: title === "Tâche(s) complétées" ? "right" : "left" },
          ]}
        >
          {nb}
        </Text>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    display: "flex",
  },
  counter: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#764d1c",
  },
  title: {
    color: "#a17b4a",
  },
});

export default Counter;
