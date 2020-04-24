import React from 'react';
import FeedScreen from "../screens/FeedScreen";
import ChallengesScreen from "../screens/ChallengesScreen";

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function DrawerNavigator({ navigation, route }) {

  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <Drawer.Screen
        name="Feed"
        component={FeedScreen}
      />
      <Drawer.Screen
        name="Challenges"
        component={ChallengesScreen}
      />
    </Drawer.Navigator>
  );
}
