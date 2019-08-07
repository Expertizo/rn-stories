import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import * as firebase from "firebase";
import styles from "./styles";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { signoutAction } from "../../store/actions/auth.action";
import { Ionicons } from "@expo/vector-icons";
import Header from "./header";
import TopBar from "./topBar";
import Carousel from "react-native-banner-carousel";
const BannerWidth = Dimensions.get("window").width;
const BannerHeight = Dimensions.get("window").height * 0.8;
class Story extends Component {
  state = {
    currentIndex: -1,
    noOfStories: 10
  };
  renderPage = (image, index) => {
    return (
      <View key={index}>
        <Image
          style={{ width: BannerWidth, height: BannerHeight }}
          source={{ uri: image }}
        />
      </View>
    );
  };
  componentDidMount() {
    this.setState(pre => ({ ...pre, currentIndex: pre.currentIndex + 1 }));
    this.interval();
  }

  interval = () => {
    if (this.clearTimeOut) clearTimeout(this.clearTimeOut);
    this.clearTimeOut = setTimeout(() => {
      const { currentIndex, noOfStories } = this.state;
      console.log("firing ===>", currentIndex);
      if (Number(currentIndex) === Number(noOfStories)) {
        console.log("clearing Timeout");
        clearTimeout(this.clearTimeOut);
      } else {
        this.setState(pre => ({ ...pre, currentIndex: pre.currentIndex + 1 }));
        this._carousel.gotoPage(this.state.currentIndex);
        console.log(
          "TCL: Story -> clearTimeOut -> this.state.currentIndex",
          this.state.currentIndex
        );
      }
    }, 10000);
  };

  render() {
    const imageURL = "https://picsum.photos/200/300?random=";
    const { currentIndex, noOfStories } = this.state;
    console.log("TCL: Story -> render -> this.state", this.state.currentIndex);
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TopBar index={currentIndex} totalStories={noOfStories} />
          <Header />
        </View>
        <View style={styles.bottomContainer}>
          <Carousel
            ref={ref => (this._carousel = ref)}
            autoplay={false}
            // autoplayTimeout={10000}
            loop={false}
            // index={0}
            pageSize={BannerWidth}
            onPageChanged={index => {
              console.log("Index is changed current  index is ", index);
              this.setState({ currentIndex: index });
              this.interval();
            }}
            index={currentIndex === -1 ? 0 : currentIndex}
          >
            {[...Array(10)].map((image, index) =>
              this.renderPage(imageURL.concat(index), index)
            )}
          </Carousel>
        </View>
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
