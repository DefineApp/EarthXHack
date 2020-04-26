import React, {useContext, useLayoutEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import ChallengeDetailsJoinButton from "../components/ChallengeDetailsJoinButton";
import dateFormat from "dateformat";
import UserContext from "../contexts/user";
import ChallengeDetailsLeaveButton from "../components/ChallengeDetailsLeaveButton";
import ChallengeContext from "../contexts/challenge";
import ChallengeDetailsTaskList from "../components/ChallengeDetailsTaskList";
import ChallengeRankings from "../components/ChallengeRankings";
import { Chip } from "react-native-paper";
import {Avatar} from "react-native-elements";

export default function ChallengeDetails({ navigation, route }) {
  let challenge;
  const {
    id: challengeId,
    name,
    description,
    startDate,
    endDate,
    tags,
    logoUrl
  } = (challenge = route.params);

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: name });
  }, [navigation, route]);

  const { user: { challenges: userChallenges } } = useContext(UserContext);
  const isActiveChallenge = userChallenges[challengeId];

  return (
    <ChallengeContext.Provider value={{ ...challenge }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.banner}>
            <Avatar
              size={80}
              source={{uri: logoUrl}}
              overlayContainerStyle={{backgroundColor: 'white'}}
              containerStyle={styles.logo}
              rounded={true}
            />
            <View style={styles.primaryInfo}>
              <Text style={{ fontWeight: "bold", fontSize: 25 }}>{name}</Text>
              <View style={styles.dateContainer}>
                <View style={styles.textContainer}>
                  <Text style={{ fontWeight: "bold" }}>Starts: </Text>
                  <Text>{dateFormat(new Date(startDate), "mmmm dS, yyyy, h:MM" +
                    " TT")}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={{ fontWeight: "bold" }}>Ends: </Text>
                  <Text>{dateFormat(new Date(endDate), "mmmm dS, yyyy, h:MM" +
                    " TT")}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.secondaryInfo}>
            <Text>{description}</Text>
            <View style={styles.chipContainer}>
              {tags.map((tag, index) =>
                <Chip
                  key={index}
                  style={styles.chip}
                  mode='outlined'
                >{tag}</Chip>)}
            </View>
          </View>
        </View>
        {isActiveChallenge ? (
          <>
            <ChallengeDetailsTaskList />
            <ChallengeDetailsLeaveButton />
          </>
        ) : null}
        {
          endDate > new Date() ?
            <ChallengeDetailsJoinButton /> :
            <ChallengeRankings />
        }
      </View>
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
    flexDirection: 'column',
    marginBottom: 20
  },
  banner: {
    flex: -1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  primaryInfo: {
  },
  logo: {
    marginRight: 20
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  chipContainer: {
    flex: -1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
