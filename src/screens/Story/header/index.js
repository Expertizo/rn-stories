import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import AvatarWithStory from "../../../components/avatarWithStory";
import { dateFormatter } from "../../../shared/helper";

export default class Header extends Component {
  render() {
    const { user, views } = this.props;
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
            user={{ ...user, time: dateFormatter(user.updatedAt) }}
            isHideBottom={true}
            ImageStyle={styles.avatarImage}
            TitleStyle={styles.avatarTitle}
            TimeStyle={styles.avatarTime}
            disabled={true}
          />
        </View>
        <View style={styles.moreOption}>
          <Text style={{ color: "#fff", marginRight: 1 }}>{views}</Text>
          <Ionicons name="md-eye" size={25} color="#fff" />
        </View>
      </View>
    );
  }
}
