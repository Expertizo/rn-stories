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
  },
  loading: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  overlayText: {
    color: "#fff",
    fontSize: width * 0.007
  }
});
