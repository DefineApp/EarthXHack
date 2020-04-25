import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {Button} from "react-native-paper"
import {navigationRef} from '../navigation/RootNavigation';

export default function ChallengeDetails({ route, navigation }) {
  const {
    name,
    description,
    startDate,
    endDate,
    tags,
    logoUrl,
    type,
  } = route.params;

  console.log(navigationRef.current);

  return (
    <View style={styles.container}>
      <View style={styles.basicInfo}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>{name}</Text>
        <Text>
          {startDate.getDate()}/{startDate.getMonth() + 1}/
          {startDate.getFullYear()} - {endDate.getDate()}/
          {endDate.getMonth() + 1}/{endDate.getFullYear()}
        </Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.join}>
        <Button mode="contained" icon="walk" onPress={()=>{}} style={{height: 50, justifyContent: 'center'}}>Join!</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  basicInfo: {
    alignItems: "center",
    padding: 20,
  },
  join: {
    flex: 1,
    justifyContent: "flex-end"
  }
});
