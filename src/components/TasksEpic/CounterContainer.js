import React from "react";
import { View, StyleSheet } from "react-native";
import Counter from "../_Shared/Counter";

const CounterContainer = ({ nbCompletedTasks, nbTasks }) => {
  return (
    <View style={styles.container}>
      <Counter nb={nbTasks} title={"Tâche(s) créées"} />
      <Counter nb={nbCompletedTasks()} title={"Tâche(s) complétées"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});

export default CounterContainer;
