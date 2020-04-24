import React from "react";
import MenuIcon from "./MenuIcon";
import {Text, View} from "react-native";
import { ListItem } from 'react-native-elements';

export default function ProfileHeader({ title, leftButton }) {
  return (
    <View>
      <View flex>
        {leftButton}
        <Text>{ title }</Text>
      </View>
      <View>
        <ListItem
          leftAvatar={{title: "hi"}}
          title="John Doe"
        />
      </View>
    </View>
  );
}
