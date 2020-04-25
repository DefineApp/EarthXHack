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

const userRanking = [
  { name: "Dragon He", handle: "abstractultra", tasks: 354 },
  { name: "Leon Si", handle: "leonzalion", tasks: 236 },
  { name: "Kevin Xu", handle: "theskillzrreal", tasks: 23 },
  { name: "Shivay Lamba", handle: "shivaylamba", tasks: 2 },
  { name: "Myhair Kaboom", handle: "mihir", tasks: -3 },
];

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

  const tasks = challenges[challengeId].tasks;
  const [checkedTasks, setCheckedTasks] = useState({});

  const [snackbarVisibility, setSnackbarVisibility] = useState(false);

  async function toggleTaskCheck(key) {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.granted) {
      const proofImage = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      });
      if (!proofImage.cancelled) {
        if (!checkedTasks[key]) {
          setCheckedTasks({ ...checkedTasks, [key]: !checkedTasks[key] });
        }
        setSnackbarVisibility(true);
      }
    }
  }

  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [overlayData, setOverlayData] = useState({});
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
        <View style={styles.tasks}>
          <Overlay
            isVisible={overlayVisibility}
            onBackdropPress={() => setOverlayVisibility(false)}
            height="auto"
          >
            <View style={styles.overlayStyle}>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {overlayData.title}
                </Text>
              </View>
              <Text style={{ paddingTop: 10 }}>{overlayData.description}</Text>
            </View>
          </Overlay>
          {isActiveChallenge ? (
            <>
              <FlatList
                data={tasks}
                renderItem={({ item, index }) => (
                  <ListItem
                    title={item.name}
                    onPress={() => {
                      setOverlayVisibility(true);
                      setOverlayData({
                        title: item.name,
                        description: item.description,
                      });
                    }}
                    checkBox={{
                      checked: checkedTasks[index],
                      onPress: () => toggleTaskCheck(index),
                    }}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
              <Snackbar
                visible={snackbarVisibility}
                onDismiss={() => setSnackbarVisibility(false)}
                action={{
                  label: "OK",
                  onPress: () => {},
                }}
              >
                Sent image for verification...
              </Snackbar>
            </>
          ) : null}
          {endDate < new Date() ? (
            <View style={styles.ranking}>
              <View style={styles.rankingTitle}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Challenge is OVER!
                </Text>
              </View>
              <FlatList
                data={userRanking}
                renderItem={({ item, index }) => {
                  const getBackgroundColor = () => {
                    switch(index + 1) {
                      case 1:
                        return "gold";
                      case 2:
                        return "gray";
                      case 3:
                        return "brown";
                      default:
                        return "black";
                    }
                  }
                  return (
                    <ListItem
                      title={item.name}
                      subtitle={`@${item.handle}`}
                      leftAvatar={{
                        rounded: true,
                        title: `${index + 1}`,
                        overlayContainerStyle: { backgroundColor: getBackgroundColor() },
                      }}
                      rightElement={
                        <>
                          <Text style={{ fontWeight: "bold" }}>
                            {item.tasks}
                          </Text>
                          <Text> tasks completed</Text>
                        </>
                      }
                      bottomDivider
                    />
                  );
                }}
                keyExtractor={(item) => item.handle}
              />
            </View>
          ) : null}
        </View>
        {isActiveChallenge ? (
          <ChallengeDetailsLeaveButton />
        ) : (
          <ChallengeDetailsJoinButton />
        )}
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
  overlayStyle: {
    margin: 10,
  },
  ranking: {},
  rankingTitle: {
    alignItems: "center",
  },
});
