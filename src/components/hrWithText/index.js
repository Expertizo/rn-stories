import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const HrWithText = props => {
  return (
    <View style={[styles.container, props.style && { ...props.style }]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default HrWithText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f7f6",
    padding: 5,
    paddingLeft: 10,
    justifyContent: "center"
  },
  text: {
    fontSize: 14,
    // fontWeight: "bold",
    color: "#ccc"
  }
});
