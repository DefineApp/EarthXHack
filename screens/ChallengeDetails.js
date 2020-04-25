import React, {useContext, useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import ChallengeDetailsJoinButton
  from "../components/ChallengeDetailsJoinButton";
import { ListItem } from "react-native-elements";
import dateFormat from "dateformat";
import challenges from "../data/challenges";
import { FlatList } from "react-native-gesture-handler";
import UserContext from "../contexts/user";
import ChallengeDetailsLeaveButton
  from "../components/ChallengeDetailsLeaveButton";

export default function ChallengeDetails({ route, navigation }) {
  const {
    id: challengeId,
    name,
    description,
    startDate,
    endDate,
    tags,
    logoUrl,
    type,
  } = route.params;

  const { challenges: userChallenges } = useContext(UserContext);
  const isActiveChallenge = userChallenges[challengeId];

  const tasks = challenges[challengeId].tasks;
  const [checkedTasks, setCheckedTasks] = useState({});
  function toggleTaskCheck(key) {
    setCheckedTasks({...checkedTasks, [key]: !checkedTasks[key]});
  }
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
          renderItem={({ item, index }) => (
            <ListItem
              title={item.name}
              subtitle={item.description}
              checkBox={{ checked: checkedTasks[index], onPress: () => toggleTaskCheck(index) }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {isActiveChallenge ?
        <ChallengeDetailsLeaveButton /> :
        <ChallengeDetailsJoinButton />
      }
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
