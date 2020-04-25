import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuIcon from "../components/MenuIcon";
import UserContext from "../contexts/user";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

function ProfileScreenWrapper() {
  const { user, setUser } = useContext(UserContext);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProfileScreen />
    </UserContext.Provider>
  );
}

export default function ProfileScreenStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerLeft: () => <MenuIcon />,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreenWrapper} />
    </Stack.Navigator>
  );
}
