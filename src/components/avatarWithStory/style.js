import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    position: "relative"
  },
  imageContainer: {
    // backgroundColor: "#000"
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 2.5,
    borderRadius: 100,
    marginRight: 5
  },
  avatar: {
    width: width * 0.17,
    height: width * 0.17,
    maxWidth: 60,
    maxHeight: 60,
    borderRadius: 100
  },
  titleContainer: {
    flexGrow: 1,
    paddingLeft: 5
  },
  title: {
    color: "#444",
    fontSize: width * 0.04,
    fontWeight: "bold"
  },
  time: {
    fontSize: width * 0.03,
    color: "#ccc"
  },
  bottomBorder: {
    position: "absolute",
    right: -5,
    bottom: 1,
    width: "85%",
    height: 1,
    backgroundColor: "rgba(204, 204, 204,0.3)"
  }
});
