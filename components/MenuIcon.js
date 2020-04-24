import React from "react";
import { Icon } from 'react-native-elements';
import navigationRef from '../navigation/NavigationRef';
import { DrawerActions } from '@react-navigation/native';

export default function MenuIcon() {
  return (
    <Icon
      name="menu"
      type="entypo"
      size={30}
      containerStyle={{marginLeft: 10}}
      onPress={() => {
        navigationRef.current.dispatch(DrawerActions.openDrawer());
      }}
    />
  );
}
