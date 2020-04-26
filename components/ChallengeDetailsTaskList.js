import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import UserContext from "../contexts/user";
import challenges from "../data/challenges";
import ChallengeContext from "../contexts/challenge";
import ChallengeDetailsTaskListItem from "./ChallengeDetailsTaskListItem";

export default function ChallengeDetailsTaskList() {
  const { id: challengeId } = useContext(ChallengeContext);
  const { user, setUser, user: { challenges: userChallenges } } = useContext(UserContext);

  const tasks = challenges[challengeId].tasks;
  const completedTasks = userChallenges[challengeId].checkedTasks;

  if (tasks && completedTasks) {
    if (
      Object.entries(tasks).length === Object.entries(completedTasks).length
    ) {
      alert("All tasks have been completed!");
    }
  }

  return (
    <View style={styles.tasks}>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <ChallengeDetailsTaskListItem item={item} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  basicInfo: {
    alignItems: "center",
    padding: 20,
  },
  tasks: {
    flex: 1,
  },
  textContainer: {
    flex: -1,
    flexDirection: "row",
  },
  dateContainer: {
    flex: -1,
    margin: 5,
  },
  overlayStyle: {
    margin: 10,
  },
  ranking: {},
  rankingTitle: {
    alignItems: "center",
  },
});
