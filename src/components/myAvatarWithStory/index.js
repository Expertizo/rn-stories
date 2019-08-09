import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";

class MyAvatarWithStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user, hasStories } = this.props;
    const { avatar, name, time } = user;

    return (
      <View style={styles.container}>
        <View
          style={[
            styles.imageContainer,
            hasStories && styles.imageContainerActive
          ]}
        >
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
        <View style={styles.icon}>
          <Ionicons name="md-more" size={32} color="#c31432" />
        </View>
      </View>
    );
  }
}

export default MyAvatarWithStory;
