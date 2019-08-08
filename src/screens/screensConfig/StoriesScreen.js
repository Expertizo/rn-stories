import React from "react";
import { createStackNavigator } from "react-navigation";
import { Stories } from "../Stories";
import { headerStyles } from "../../shared/headerStyles";
import StoryScreen from "./StoryScreen";
import AddStoryScreen from "./AddStoryScreen";

class StoriesScreen extends React.Component {
  render() {
    return <Stories />;
  }
}

export const StoriesStack = createStackNavigator(
  {
    StoriesScreen: { screen: StoriesScreen },
    StoryScreen: { screen: StoryScreen },
    AddStoryScreen: { screen: AddStoryScreen }
  },
  {
    initialRouteName: "AddStoryScreen",
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
