import React, {useContext} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import ChallengeContext from "../contexts/Challenge";
import ChallengeDetailsTaskListItem from "./ChallengeDetailsTaskListItem";
import useData from "../hooks/useData";
import Loading from "./Loading";

export default function ChallengeDetailsTaskList() {
  const { id: challengeId } = useContext(ChallengeContext);
  const challenges = useData('challenges');
  if (!challenges) return <Loading />;

  const tasks = challenges[challengeId].tasks;

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

