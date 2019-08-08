import React from "react";
import { View } from "react-native";
import { AddStory } from "../AddStory";

export default class AddStoryScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Add Story",
    title: "Add Story",
    drawerLabel: "Add Story"
  };
  render() {
    return <AddStory />;
  }
}
