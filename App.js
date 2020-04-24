import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationRef from "./navigation/NavigationRef";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { StatusBar, Platform } from "react-native";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      {Platform.OS === "ios" ? <StatusBar barStyle="dark-content" /> : null}
      <DrawerNavigator />
    </NavigationContainer>
  );
}
