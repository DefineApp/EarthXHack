import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {Button} from "react-native-paper"
import dateFormat from "dateformat"

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

  return (
    <View style={styles.container}>
      <View style={styles.basicInfo}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>{name}</Text>
        <Text>
          {dateFormat(startDate, "dd/mm/yyyy")} - {dateFormat(endDate, "dd/mm/yyyy")}
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
