import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import "moment/locale/fr";

const Header = () => {
  const date = moment();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {date.locale("fr").format("dddd Do MMMM")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "normal",
    color: "#394f36",
    textTransform: "capitalize",
  },
});

export default Header;
