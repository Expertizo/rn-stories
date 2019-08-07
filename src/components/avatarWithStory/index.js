import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";

class AvatarWithStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { avatar, name, time } = this.props.user;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: avatar
            }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.bottomBorder} />
      </View>
    );
  }
}

export default AvatarWithStory;