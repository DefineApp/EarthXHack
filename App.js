import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import userData from "./data/user";
import { navigationRef } from "./navigation/RootNavigation";
import DrawerNavigator from "./navigation/DrawerNavigator";
import {StatusBar, Platform } from "react-native";
import UserContext from "./contexts/user";
import { ActionSheetProvider } from '@expo/react-native-action-sheet'


export default function App() {
  const [user, setUser] = useState(userData);

  return (
    <NavigationContainer ref={navigationRef}>
      {Platform.OS === "ios" ? <StatusBar barStyle="dark-content" /> : null}
      <UserContext.Provider value={{user, setUser}}>
        <ActionSheetProvider>
          <DrawerNavigator />
        </ActionSheetProvider>
      </UserContext.Provider>
    </NavigationContainer>
  );
}
