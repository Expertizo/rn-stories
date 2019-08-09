import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import AvatarWithStory from "../../../components/avatarWithStory";

export default class Header extends Component {
  render() {
    const userObj = {
      avatar: "https://avatars1.githubusercontent.com/u/35776235?s=460&v=4",
      name: "Hams Ahmed Ansari",
      time: "Just Now"
    };
    console.log(
      "TCL: Header -> render -> this.props.goBack",
      this.props.goBack
    );
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.goBack}
          style={styles.backContainer}
        >
          <Ionicons name="md-arrow-back" size={32} color="#fff" />
        </TouchableOpacity>
        <View style={styles.center}>
          <AvatarWithStory
            user={userObj}
            isHideBottom={true}
            ImageStyle={styles.avatarImage}
            TitleStyle={styles.avatarTitle}
            TimeStyle={styles.avatarTime}
            disabled={true}
          />
        </View>
        <View style={styles.moreOption}>
          <Ionicons name="md-more" size={32} color="#fff" />
        </View>
      </View>
    );
  }
}
