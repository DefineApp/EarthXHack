import * as React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import UsersScreen from "../screens/UsersSearch";
import MenuIcon from "../components/MenuIcon";
import UserProfileScreen from "../screens/UserProfileScreen";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{
        headerLeft: () => <MenuIcon />,
      }}
    >
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="UsersProfile" component={UserProfileScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
