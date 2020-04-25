import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Surface } from "react-native-paper";
import dateFormat from "dateformat";
import challenges from "../data/challenges";
import { FlatList } from "react-native-gesture-handler";

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
  const tasks = challenges[id].tasks;
  return (
    <View style={styles.container}>
      <View style={styles.basicInfo}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>{name}</Text>
        <Text>
          {dateFormat(startDate, "dd/mm/yyyy")} -{" "}
          {dateFormat(endDate, "dd/mm/yyyy")}
        </Text>
        <Text>{description}</Text>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Surface>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </Surface>
        )}
        keyExtractor={(item) => item.name + item.description}
      />
      <View style={styles.join}>
        <Button
          mode="contained"
          icon="walk"
          onPress={() => {}}
          style={{ height: 50, justifyContent: "center" }}
        >
          Join!
        </Button>
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
    justifyContent: "flex-end",
  },
});
