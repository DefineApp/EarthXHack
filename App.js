import React, {useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import user from "./data/user";
import { navigationRef } from "./navigation/RootNavigation";
import DrawerNavigator from "./navigation/DrawerNavigator";
import {StatusBar, Platform, Text} from "react-native";
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
