import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedHome from "../screens/FeedHome";
import MenuIcon from "../components/MenuIcon";
import { stackRef } from './RootNavigation';
import ChallengeDetails from '../screens/ChallengeDetails';

const Stack = createStackNavigator();

export default function FeedScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
    >
      <Stack.Screen
        name="Feed"
        component={FeedHome}
        options={{
          headerLeft: () => <MenuIcon />,
          headerStyle: {
            shadowColor: 'transparent',
          }
        }}
      />
      <Stack.Screen
        name="ChallengeDetails"
        component={ChallengeDetails}
        options={{
          title: "Challenge Details",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
