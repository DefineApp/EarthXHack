import React, {useContext} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import UserContext from "../contexts/User";
import ChallengeContext from "../contexts/Challenge";
import ChallengeDetailsTaskListItem from "./ChallengeDetailsTaskListItem";
import useData from "../hooks/useData";
import Loading from "./Loading";

export default function ChallengeDetailsTaskList() {
  const challenges = useData('challenges');
  const { id: challengeId } = useContext(ChallengeContext);
  const { user, setUser, user: { challenges: userChallenges } } = useContext(UserContext);

  if (!challenges) return <Loading />;

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
