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
    endDate,
  } = (challenge = route.params);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: name });
  }, [navigation, route]);

  const { user: { challenges: userChallenges } } = useContext(LoggedInUserContext);
  const isActiveChallenge = userChallenges[challengeId];
  const isCurrentChallenge = Date.now() < endDate;

  const [shareBoxVisibility, setShareBoxVisibility] = useState(false);

  return (
    <ChallengeContext.Provider value={{ ...challenge }}>
      <ChallengeDetailsTaskList
        ListHeaderComponent={
          <ChallengeDetailsTaskListHeader
            isOverlayVisible={shareBoxVisibility}
            setIsOverlayVisible={setShareBoxVisibility}
          />
        }
        ListFooterComponent={
          isCurrentChallenge ? isActiveChallenge ?
            <ChallengeDetailsLeaveButton /> :
            <>
              <ChallengeDetailsJoinButton
                onPress={() => setShareBoxVisibility(true)}
              />
              <View>
                <Text>Join the challenge to view the tasks!</Text>
              </View>
            </>
          : <ChallengeRankings />
        }
        />
    </ChallengeContext.Provider>
  );
}
