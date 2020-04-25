import React from "react";
import { Text, View, StyleSheet } from "react-native";
import dateFormat from "dateformat"
import ChallengeDetailsJoinButton
  from "../components/ChallengeDetailsJoinButton";

export default function ChallengeDetails({ route, navigation }) {
  const {
    id,
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
      <ChallengeDetailsJoinButton />
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
  }
});
