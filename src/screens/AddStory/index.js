import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from "react-native";
import * as firebase from "firebase";
import { withNavigation } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import { ImagePicker } from "expo";
import { connect } from "react-redux";
const { width, height } = Dimensions.get("window");
import "firebase/firestore";

class AddStoriesForm extends Component {
  state = {
    image: "",
    title: "",
    loading: false
  };
  blobMaker = uri => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  };
  _handelSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "Images"
    });
    console.log("TCL: AddStoriesForm -> _handelSelectImage -> result", result);
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _handelSubmit = async () => {
    const { userId } = this.props;
    const { image: img, title } = this.state;
    console.log("firing submit");
    if (img.length > 0) {
      console.log("image exist");
      if (userId) {
        console.log("user exist");

        try {
          this.setState({ loading: true });
          const image = await this.blobMaker(img);
          console.log("image convert");

          // uploading image in firebase storage
          const tempImage = await firebase
            .storage()
            .ref()
            .child(`images/${new Date().getTime()}.jpg`)
            .put(image);
          console.log("image uploaded");

          const imageURL = await tempImage.ref.getDownloadURL();
          console.log("image is get it");

          const createdAt = firebase.firestore.Timestamp.now().toMillis();
          const payload = {
            image: imageURL,
            viewedBy: [],
            createdAt
          };
          if (title) {
            payload.title = title;
          }
          console.log("updating Data");
          await firebase
            .firestore()
            .collection("users")
            .doc(userId)
            .collection("stories")
            .add(payload);
          await firebase
            .firestore()
            .collection("users")
            .doc(userId)
            .set(
              {
                updatedAt: createdAt
              },
              { merge: true }
            );
          console.log("Done");
          this.clearState();
          this.setState({ loading: false });
        } catch (error) {
          console.log("TCL: AddStoriesForm -> _handelSubmit -> error", error);
          this.setState({ loading: false });
        }
      }
    }
  };

  clearState = () =>
    this.setState({
      image: "",
      title: ""
    });

  render() {
    const { image, title, loading } = this.state;
    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.inputContainer}>
            <Text>Title (Optional)</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={title => this.setState({ title })}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={image ? "Image is selected" : "Select Image"}
              style={styles.button}
              onPress={this._handelSelectImage}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              style={styles.button}
              onPress={this._handelSubmit}
            />
          </View>
        </ScrollView>
        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}
      </React.Fragment>
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

export const AddStory = connect(mapStateToProps)(
  withNavigation(AddStoriesForm)
);

const styles = StyleSheet.create({
  container: {
    width,
    paddingTop: height * 0.025,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    paddingHorizontal: width * 0.09,
    alignSelf: "flex-start"
  },
  buttonContainer: {
    marginTop: 5,
    width: width * 0.8
  },
  input: {
    marginBottom: 5,
    marginTop: 5,
    borderWidth: 1,
    width: width * 0.8
  },
  loading: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  }
});
