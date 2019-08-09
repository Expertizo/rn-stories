import React from "react";
import { View, Text } from "react-native";
import { FacebookAuth, GoogleAuth } from "./SocialAuth";
import { EmailAuth } from "./emailAuth";
import { styles } from "../../screens/styles";

/**
|--------------------------------------------------
| Main Auth/Login/Signup Form component
|--------------------------------------------------
*/

export const AuthForm = props => {
  const { isSignup } = props;
  console.log("TCL: props", props);

  return (
    <View>
      <Text style={styles.formHeading}>{isSignup ? "Signup" : "Login"}</Text>
      <EmailAuth isSignup={isSignup} />
      {/* <FacebookAuth /> */}
      {/* <GoogleAuth /> */}
    </View>
  );
};
