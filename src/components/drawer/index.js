import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { signoutAction } from "../../store/actions/auth.action";

const Drawer = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.navigation.navigate("StoriesScreen")}
      >
        <Text style={styles.text}>Stories</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.navigation.navigate("AddStoryScreen")}
      >
        <Text style={styles.text}>Add Story</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          props.signout();
          props.navigation.navigate("Auth");
        }}
      >
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signoutAction({ userStatus: false }))
  };
};
export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(withNavigation(Drawer));

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight
  },
  item: {
    marginVertical: 2.5,
    backgroundColor: "#ccc",
    padding: 20,
    paddingLeft: 10
  },
  text: {
    color: "#444"
  }
});
