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
import { dateIsWithIin24Hours, dateFormatter } from "../../shared/helper";

class StoriesPage extends Component {
  state = {
    user: {},
    allUsers: [],
    filterUsers: []
  };
  componentDidMount = async () => {
    const { userId } = this.props;
    this.timeIntervalSubscription = setInterval(() => {
      if (this.state.allUsers !== []) {
        this.filterUsers();
      }
    }, 500);
    try {
      this.UserSubscription = await firebase
        .firestore()
        .collection("users")
        .onSnapshot(snapshot => {
          if (!snapshot.empty) {
            let tempUser = [];
            snapshot.forEach(snap => {
              tempUser.push({ ...snap.data(), _id: snap.id });
            });

            const user = tempUser.find(user => user._id === userId);
            const allUsers = tempUser.filter(user => user._id !== userId);

            this.setState({ allUsers, user });
          }
        });
    } catch (error) {
      console.log("TCL: StoriesPage -> componentDidMount -> error", error);
    }
  };

  componentWillUnmount() {
    if (this.UserSubscription) this.UserSubscription();
    if (this.timeIntervalSubscription)
      clearInterval(this.timeIntervalSubscription);
  }

  filterUsers = () => {
    const { allUsers } = this.state;
    const filterUsers = allUsers.filter(user =>
      dateIsWithIin24Hours(user.updatedAt)
    );
    this.setState({ filterUsers });
  };

  render() {
    const { user, filterUsers } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerWithPadding}>
          {Object.entries(user).length !== 0 && (
            <MyAvatarWithStory
              hasStories={dateIsWithIin24Hours(user.updatedAt)}
              user={{ ...user, time: dateFormatter(user.updatedAt) }}
            />
          )}
        </View>
        <HrWithText text={`Other Users (${filterUsers.length})`} />
        <View style={styles.containerWithPadding}>
          {filterUsers &&
            filterUsers.map(user => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("StoryScreen", {
                    uid: user._id
                  })
                }
              >
                <AvatarWithStory
                  user={{ ...user, time: dateFormatter(user.updatedAt) }}
                />
              </TouchableOpacity>
            ))}
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
