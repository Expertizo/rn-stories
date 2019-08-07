import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import * as firebase from "firebase";
import styles from "./styles";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { signoutAction } from "../../store/actions/auth.action";
import { Ionicons } from "@expo/vector-icons";
import MyAvatarWithStory from "../../components/myAvatarWithStory";
import HrWithText from "../../components/hrWithText";
import AvatarWithStory from "../../components/avatarWithStory";
import Header from "./header";
import TopBar from "./topBar";

class Story extends Component {
  render() {
    const userObj = {
      avatar: "https://avatars1.githubusercontent.com/u/35776235?s=460&v=4",
      name: "Hams Ahmed Ansari",
      time: "Just Now"
    };
    return (
      <View style={{ backgroundColor: "black" }}>
        <TopBar />
        <Header />
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   userStatus: state.authReducer.userStatus
// });

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signoutAction({ userStatus: false }))
  };
};

export const StoryPage = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(withNavigation(Story));
