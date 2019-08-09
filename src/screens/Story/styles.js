import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "#000"
  },
  topContainer: {
    height: height * 0.18
  },
  bottomContainer: {
    width,
    height: height * 0.92
  }
});
