import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedHome from "../screens/FeedHome";
import MenuIcon from "../components/MenuIcon";
import { stackRef } from './RootNavigation';

const Stack = createStackNavigator();

export default function FeedScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      ref={stackRef}
    >
      <Stack.Screen
        name="Feed"
        component={FeedHome}
        options={{
          headerLeft: () => <MenuIcon />
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
