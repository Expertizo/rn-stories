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

class StoriesPage extends Component {
  render() {
    const userObj = {
      avatar: "https://avatars1.githubusercontent.com/u/35776235?s=460&v=4",
      name: "Hams Ahmed Ansari",
      time: "Just Now"
    };
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerWithPadding}>
          <MyAvatarWithStory user={userObj} />
        </View>
        <HrWithText text="View Other Stories" />
        <View style={styles.containerWithPadding}>
          <AvatarWithStory user={userObj} />
          <AvatarWithStory user={userObj} />
          <AvatarWithStory user={userObj} />
          <AvatarWithStory user={userObj} />
          <AvatarWithStory user={userObj} />
        </View>
        <HrWithText text="Already Viewed Stories" />
        <View style={styles.containerWithPadding}>
          <AvatarWithStory user={userObj} />
          <AvatarWithStory user={userObj} />
          <AvatarWithStory user={userObj} />
        </View>
      </ScrollView>
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

export const Stories = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(withNavigation(StoriesPage));
