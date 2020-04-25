import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import user from "./data/user";
import navigationRef from "./navigation/NavigationRef";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { StatusBar, Platform } from "react-native";
import UserContext from "./contexts/user";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      {Platform.OS === "ios" ? <StatusBar barStyle="dark-content" /> : null}
      <UserContext.Provider value={user}>
        <DrawerNavigator />
      </UserContext.Provider>
    </NavigationContainer>
  );
}
