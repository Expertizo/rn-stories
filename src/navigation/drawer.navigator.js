import { createDrawerNavigator } from "react-navigation";
import {
  AboutStack,
  HomeStack,
  ContactStack,
  StoriesStack
} from "../screens/screensConfig";
import React, { Component } from "react";
import { View, Text } from "react-native";
import Drawer from "../components/drawer";
/**
|--------------------------------------------------
| DrawerNavigator Implementation
|--------------------------------------------------
*/

export const AppDrawerNavigator = createDrawerNavigator(
  {
    // Home: { screen: HomeStack },
    Stories: { screen: StoriesStack }
    // About: { screen: AboutStack },
    // Contact: { screen: ContactStack }
  },
  {
    contentComponent: () => (
      <View>
        <Drawer />
      </View>
    )
  }
);
