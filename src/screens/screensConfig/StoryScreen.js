import React from "react";
import { View } from "react-native";
import { StoryPage } from "../Story";

export default class StoryScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <StoryPage id={this.props.navigation.getParam("uid")} />;
  }
}
