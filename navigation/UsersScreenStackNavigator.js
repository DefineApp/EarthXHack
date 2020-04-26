import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UsersScreen from "../screens/UsersSearch";
import MenuIcon from "../components/MenuIcon";
import UserContext from "../contexts/user";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

function UserProfileScreenWrapper({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: route.params.name });
  }, [navigation, route]);

  return (
    <UserContext.Provider value={{ user: route.params, setUser: () => {} }}>
      <ProfileScreen />
    </UserContext.Provider>
  );
}

export default function UsersSearchStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Users"
    >
      <Stack.Screen
        name="Users"
        component={UsersScreen}
        options={{
          headerLeft: () => <MenuIcon />,
        }}
      />
      <Stack.Screen
        name="UsersProfile"
        component={UserProfileScreenWrapper}
      />
    </Stack.Navigator>
  );
}
