import React, { Component } from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  ProgressBarAndroid
} from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import AvatarWithStory from "../../../components/avatarWithStory";
const { width, height } = Dimensions.get("window");

export default class TopBar extends Component {
  state = {
    currentIndex: -1,
    noOfStories: 10,
    noOfProgress: 0
  };
  componentDidMount() {
    const { duration } = this.props;
    this.setState(pre => ({ ...pre, currentIndex: pre.currentIndex + 1 }));
    if (this.interVal) clearInterval(this.interVal);
    this.updateNoOfProgress();
    const clearTimeOut = setInterval(() => {
      const { currentIndex, noOfStories } = this.state;
      console.log("firing");
      if (Number(currentIndex) === Number(noOfStories)) {
        console.log("clearing Timeout");
        clearInterval(clearTimeOut);
        clearInterval(this.interVal);
      } else {
        this.setState(pre => ({ ...pre, currentIndex: pre.currentIndex + 1 }));
        if (this.interVal) clearInterval(this.interVal);
        this.updateNoOfProgress();
      }
    }, 10000);
  }
  updateNoOfProgress = () => {
    // const { duration } = this.props;
    const duration = 100;
    this.setState({ noOfProgress: 0 });
    this.interVal = setInterval(() => {
      this.setState(pre => ({ ...pre, noOfProgress: pre.noOfProgress + 1 }));
    }, duration);
  };
  render() {
    const { currentIndex, noOfStories, noOfProgress } = this.state;
    console.log("TCL: TopBar -> render -> this.state", this.state);
    return (
      <View style={styles.container}>
        {[...Array(noOfStories)].map((story, index) => (
          <View
            style={[
              styles.single,
              { width: Math.floor(width / noOfStories) - noOfStories }
            ]}
            key={index}
          >
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={
                !(index >= currentIndex)
                  ? 1
                  : index === currentIndex
                  ? noOfProgress / 100
                  : 0
              }
              style={styles.bar}
              color="#fff"
            />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    width,
    height: height * 0.03,
    paddingTop: height * 0.01,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  bar: { transform: [{ scaleX: 1.0 }, { scaleY: 1 }], height: height * 0.01 },
  single: { marginLeft: 1 }
});
