import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap"
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
    width: width * 0.2,
    height: width * 0.2,
    maxWidth: 70,
    maxHeight: 70,
    borderRadius: 100
  },
  titleContainer: {
    flexGrow: 1,
    paddingLeft: 5
  },
  title: {
    color: "#444",
    fontSize: width * 0.05,
    fontWeight: "bold"
  },
  time: {
    fontSize: width * 0.04,
    color: "#ccc"
  },
  icon: {
    transform: [
      {
        rotate: "90deg"
      }
    ]
  }
});
