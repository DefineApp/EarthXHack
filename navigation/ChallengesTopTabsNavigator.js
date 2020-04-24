import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChallengesActive from "../screens/ChallengesActive";
import ChallengesPast from "../screens/ChallengesPast";
import ChallengesSearch from "../screens/ChallengesSearch";
import {createStackNavigator} from "@react-navigation/stack";
import MenuIcon from '../components/MenuIcon';

const Tab = createMaterialTopTabNavigator();

function TopTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ChallengesPast"
        component={ChallengesPast}
        options={{
          title: "Past"
        }}
      />
      <Tab.Screen
        name="ChallengesActive"
        component={ChallengesActive}
        options={{
          title: "Active"
        }}
      />
      <Tab.Screen
        name="ChallengesSearch"
        component={ChallengesSearch}
        options={{
          title: "Search"
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function ChallengesTopTabsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <MenuIcon />
      }}
    >
      <Stack.Screen
        name="Challenges"
        component={TopTabsNavigator}
      />
    </Stack.Navigator>
  );
}
