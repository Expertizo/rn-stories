import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import styles from "./styles";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { signoutAction } from "../../store/actions/auth.action";
import { Ionicons } from "@expo/vector-icons";
import MyAvatarWithStory from "../../components/myAvatarWithStory";
import HrWithText from "../../components/hrWithText";
import AvatarWithStory from "../../components/avatarWithStory";

class StoriesPage extends Component {
  state = {
    user: {},
    myStories: []
  };
  componentDidMount = async () => {
    const { userId } = this.props;
    console.log("TCL: StoriesPage -> componentDidMount -> userId", userId);
    try {
      // this.UserSubscription =
      const currentTimeStamp =
        firebase.firestore.Timestamp.now().toMillis() - 24 * 60 * 60 * 1000;
      console.log(
        "TCL: StoriesPage -> componentDidMount -> currentTimeStamp",
        currentTimeStamp
      );
      await firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .get()
        .then(doc => {
          if (doc.exists) {
            const user = doc.data();
            this.setState({ user });
          }
        });
      this.UserSubscription = await firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .collection("stories")
        .orderBy("createdAt", "desc")
        .startAt(currentTimeStamp)
        .onSnapshot(snapshot => {
          console.log(
            "TCL: StoriesPage -> componentDidMount -> snapshot",
            snapshot
          );
          if (!snapshot.empty) {
            let myStories = [];
            snapshot.forEach(snap => {
              console.log(
                "TCL: StoriesPage -> componentDidMount -> snap",
                snap
              );
              myStories.push(snap.data());
            });
            this.setState({ myStories });
          }
        });
    } catch (error) {
      console.log("TCL: StoriesPage -> componentDidMount -> error", error);
    }
  };

  componentWillUnmount() {
    if (this.UserSubscription) this.UserSubscription();
  }

  render() {
    const userObj = {
      avatar: "https://avatars1.githubusercontent.com/u/35776235?s=460&v=4",
      name: "Hams Ahmed Ansari",
      time: "Just Now"
    };
    const { user, myStories } = this.state;
    console.log("TCL: StoriesPage -> render -> myStories", myStories);
    // const lastStory ;
    if (myStories) {
      lastStory = myStories[0];
    }
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerWithPadding}>
          {user && <MyAvatarWithStory user={{ ...user, time: "Just Now" }} />}
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

const mapStateToProps = (state, ownProps) => {
  console.log("TCL: mapStateToProps -> state", state);
  return {
    userId: state.authReducer.userId
    // propName: prop
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signoutAction({ userStatus: false }))
  };
};

export const Stories = connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(StoriesPage));
