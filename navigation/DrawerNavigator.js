import React from 'react';
import FeedScreenStackNavigator from './FeedScreenStackNavigator';
import ProfileScreenStackNavigator from './ProfileScreenStackNavigator';
import ChallengesTopTabsNavigator from "./ChallengesTopTabsNavigator";

import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Feed';

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName={INITIAL_ROUTE_NAME} drawerContent={({navigation}) => <DrawerContent navigation={navigation}/>}>
      <Drawer.Screen
        name="FeedScreen"
        component={FeedScreenStackNavigator}
        options={{
          title: "Feed"
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreenStackNavigator}
        options={{
          title: "Profile"
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
