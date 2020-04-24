import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import navigationRef from './navigation/NavigationRef';
import DrawerNavigator from './navigation/DrawerNavigator';
import {StatusBar} from "react-native";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle="dark-content" />
      <DrawerNavigator />
    </NavigationContainer>
  );
}
