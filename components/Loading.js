import React from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function Loading() {
  return (
    <View style={{flex: -1, alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Loading</Text>
      <ActivityIndicator style={{padding:20}} size="large"/>
    </View>
  );
}
