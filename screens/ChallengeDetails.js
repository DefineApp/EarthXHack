import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ChallengeDetailsJoinButton
  from "../components/ChallengeDetailsJoinButton";
import { Button, Surface, List } from "react-native-paper";
import {ListItem} from "react-native-elements";
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
      <View style={styles.tasks}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ListItem title={item.name} subtitle={item.description} checkBox/>
        )}
        keyExtractor={(item) => item.name + item.description}
      />
      </View>
      <View style={styles.join}>
        <ChallengeDetailsJoinButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  basicInfo: {
    alignItems: "center",
    padding: 20,
  },
  tasks: {
    flex: 1
  },
});
