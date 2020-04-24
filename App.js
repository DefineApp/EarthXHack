import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import navigationRef from './navigation/NavigationRef';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
