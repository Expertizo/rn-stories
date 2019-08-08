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
  Home: { screen: HomeStack },
  Stories: { screen: StoriesStack },
  About: { screen: AboutStack },
  Contact: { screen: ContactStack }
});
