import { createDrawerNavigator } from "react-navigation";
import {
  AboutStack,
  HomeStack,
  ContactStack,
  StoriesStack
} from "../screens/screensConfig";

/**
|--------------------------------------------------
| DrawerNavigator Implementation
|--------------------------------------------------
*/

export const AppDrawerNavigator = createDrawerNavigator({
  Stories: { screen: StoriesStack }
  // Home: { screen: HomeStack },
  // About: { screen: AboutStack },
  // Contact: { screen: ContactStack }
});
