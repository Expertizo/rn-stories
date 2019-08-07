import React from "react";
import { createStackNavigator } from "react-navigation";
import { Stories } from "../Stories";
import { headerStyles } from "../../shared/headerStyles";

class StoriesScreen extends React.Component {
  render() {
    return <Stories />;
  }
}

export const StoriesStack = createStackNavigator(
  {
    StoriesScreen: { screen: StoriesScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Whatsapp Stories",
        title: "Stories",
        drawerLabel: "Stories",
        ...headerStyles(navigation)
      };
    }
  }
);
