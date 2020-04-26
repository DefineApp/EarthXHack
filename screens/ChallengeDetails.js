import React, { useContext, useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ChallengeDetailsJoinButton from "../components/ChallengeDetailsJoinButton";
import dateFormat from "dateformat";
import LoggedInUserContext from "../contexts/LoggedInUser";
import ChallengeDetailsLeaveButton from "../components/ChallengeDetailsLeaveButton";
import ChallengeContext from "../contexts/Challenge";
import ChallengeDetailsTaskList from "../components/ChallengeDetailsTaskList";
import ChallengeRankings from "../components/ChallengeRankings";
import { Chip, TextInput } from "react-native-paper";
import { Avatar, Overlay, Button } from "react-native-elements";
import ChallengeDetailsTaskListHeader
  from "../components/ChallengeDetailsTaskListHeader";

export default function ChallengeDetails({ navigation, route }) {
  let challenge;
  const {
    id: challengeId,
    name,
    description,
    startDate,
    endDate,
    tags,
    logoUrl,
  } = (challenge = route.params);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: name });
  }, [navigation, route]);

  const { user: { challenges: userChallenges } } = useContext(LoggedInUserContext);
  const isActiveChallenge = userChallenges[challengeId];
  const isCurrentChallenge = Date.now() < endDate;

  const [shareBoxVisibility, setShareBoxVisibility] = useState(false);
  const [shareBoxValue, setShareBoxValue] = useState(
    `I have just signed up for the ${name} challenge!`
  );

  return (
    <ChallengeContext.Provider value={{ ...challenge }}>
      <ChallengeDetailsTaskList
        ListHeaderComponent={<ChallengeDetailsTaskListHeader />}
        ListFooterComponent={
          isCurrentChallenge ? isActiveChallenge ?
            <ChallengeDetailsLeaveButton /> :
            <ChallengeDetailsJoinButton
              onPress={() => setShareBoxVisibility(true)}
            /> :
            <View>
              <Text>Join the challenge to view the tasks!</Text>
            </View>
        }

        />
      ) : !isCurrentChallenge ? (
        <ChallengeRankings />
      ) : null}
    </ChallengeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: -1,
    flexDirection: "column",
    marginBottom: 20,
  },
  banner: {
    flex: -1,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  primaryInfo: {},
  logo: {
    marginRight: 20,
  },
  secondaryInfo: {
    alignItems: "center",
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
    marginVertical: 5,
  },
  chip: {
    marginRight: 5,
    marginTop: 5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  chipContainer: {
    flex: -1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
