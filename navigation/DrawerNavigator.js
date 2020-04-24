import React from 'react';
import FeedScreenStack from "../screens/FeedScreenStack";
import ChallengesScreen from "../screens/ChallengesScreen";

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Feed';

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Drawer.Screen
        name="FeedScreen"
        component={FeedScreenStack}
      />
      <Drawer.Screen
        name="ChallengesScreen"
        component={ChallengesScreen}
      />
    </Drawer.Navigator>
  );
}
