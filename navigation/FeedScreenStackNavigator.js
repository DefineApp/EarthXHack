import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedHome from "../screens/FeedHome";
import MenuIcon from "../components/MenuIcon";

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
        component={FeedHome}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
