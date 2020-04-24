import React from 'react';
import FeedScreenStackNavigator from './FeedScreenStackNavigator';
import ChallengesTopTabsNavigator from "./ChallengesTopTabsNavigator";

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Feed';

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Drawer.Screen
        name="FeedScreen"
        component={FeedScreenStackNavigator}
        options={{
          title: "Feed"
        }}
      />
      <Drawer.Screen
        name="ChallengesScreen"
        component={ChallengesTopTabsNavigator}
        options={{
          title: "Challenges"
        }}
      />
    </Drawer.Navigator>
  );
}
