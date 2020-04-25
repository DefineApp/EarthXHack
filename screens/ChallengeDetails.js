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
        <View style={styles.dateContainer}>
          <View style={styles.textContainer}>
            <Text style={{fontWeight: 'bold'}}>Starts: </Text>
            <Text>{dateFormat(startDate, "mmmm dS, yyyy, h:MM TT")}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={{fontWeight: 'bold'}}>Ends: </Text>
            <Text>{dateFormat(endDate, "mmmm dS, yyyy, h:MM TT")}</Text>
          </View>
        </View>
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
      <ChallengeDetailsJoinButton />
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
  textContainer: {
    flex: -1,
    flexDirection: 'row'
  },
  dateContainer: {
    flex: -1,
    margin: 5,
  }
});
