import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreenHome from "./FeedScreenHome";
import MenuIcon from "../components/MenuIcon";
import ProfileHeader from "../components/ProfileHeader";

const Stack = createStackNavigator();

export default function FeedScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerLeft: () => <MenuIcon />
      }}
    >
      <Stack.Screen
        name="Feed"
        component={FeedScreenHome}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
