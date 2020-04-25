import React, { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ChallengeDetailsJoinButton from "../components/ChallengeDetailsJoinButton";
import { ListItem, Overlay } from "react-native-elements";
import { Snackbar } from "react-native-paper";
import dateFormat from "dateformat";
import challenges from "../data/challenges";
import { FlatList } from "react-native-gesture-handler";
import UserContext from "../contexts/user";
import ChallengeDetailsLeaveButton from "../components/ChallengeDetailsLeaveButton";
import * as ImagePicker from "expo-image-picker";
import ChallengeContext from "../contexts/challenge";
import ChallengeDetailsTaskList from "../components/ChallengeDetailsTaskList";
import { useActionSheet } from "@expo/react-native-action-sheet";
import ChallengeRankings from "../components/ChallengeRankings";

export default function ChallengeDetails({ route }) {
  let challenge;
  const {
    id: challengeId,
    name,
    description,
    startDate,
    endDate,
    tags,
    logoUrl,
    type,
  } = (challenge = route.params);

  const {
    user: { challenges: userChallenges },
  } = useContext(UserContext);

  const isActiveChallenge = userChallenges[challengeId];

  return (
    <ChallengeContext.Provider value={{ ...challenge }}>
      <View style={styles.container}>
        <View style={styles.basicInfo}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>{name}</Text>
          <View style={styles.dateContainer}>
            <View style={styles.textContainer}>
              <Text style={{ fontWeight: "bold" }}>Starts: </Text>
              <Text>{dateFormat(startDate, "mmmm dS, yyyy, h:MM TT")}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={{ fontWeight: "bold" }}>Ends: </Text>
              <Text>{dateFormat(endDate, "mmmm dS, yyyy, h:MM TT")}</Text>
            </View>
          </View>
          <Text>{description}</Text>
        </View>
        {isActiveChallenge ? (
          <>
            <ChallengeDetailsTaskList />
            <ChallengeDetailsLeaveButton />
          </>
        ) : (
          <>{endDate > new Date() ? <ChallengeDetailsJoinButton /> : null}</>
        )}
        {endDate < new Date() ? <ChallengeRankings /> : null}
      </View>
    </ChallengeContext.Provider>
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
});
