import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

class AvatarWithStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props;
    const { avatar, name, time, _id } = user;
    const isHideBottom = this.props.isHideBottom || false;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: avatar
            }}
            style={[
              styles.avatar,
              this.props.ImageStyle && { ...this.props.ImageStyle }
            ]}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              this.props.TitleStyle && { ...this.props.TitleStyle }
            ]}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            style={[
              styles.time,
              this.props.TimeStyle && { ...this.props.TimeStyle }
            ]}
          >
            {time}
          </Text>
        </View>
        {!isHideBottom && <View style={styles.bottomBorder} />}
      </View>
    );
  }
}

export default withNavigation(AvatarWithStory);
