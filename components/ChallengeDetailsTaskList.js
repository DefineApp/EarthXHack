import React, {useContext, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {ListItem, Overlay} from "react-native-elements";
import {Snackbar} from "react-native-paper";
import challenges from "../data/challenges";
import ChallengeContext from "../contexts/challenge";
import * as ImagePicker from "expo-image-picker";
import UserContext from "../contexts/user";

const userRanking = [
  { name: "Dragon He", handle: "abstractultra", tasks: 354 },
  { name: "Leon Si", handle: "leonzalion", tasks: 236 },
  { name: "Kevin Xu", handle: "theskillzrreal", tasks: 23 },
  { name: "Shivay Lamba", handle: "shivaylamba", tasks: 2 },
  { name: "Myhair Kaboom", handle: "mihir", tasks: -3 },
];

export default function ChallengeDetailsTaskList() {
  const { id: challengeId, endDate } = useContext(ChallengeContext);
  const { user, setUser, user: { challenges: userChallenges } } = useContext(UserContext);

  const tasks = challenges[challengeId].tasks;
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [overlayData, setOverlayData] = useState({});

  const verifiedTasks = userChallenges[challengeId]?.verifiedTasks || {};
  const checkedTasks = userChallenges[challengeId]?.checkedTasks || {};

  const [snackbarVisibility, setSnackbarVisibility] = useState(false);

  async function toggleTaskCheck(key) {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.granted) {
      const proofImage = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      });
      if (!proofImage.cancelled) {
        if (!checkedTasks[key]) {
          user.challenges[challengeId].checkedTasks[key] = true;
          setUser({...user});
        }
        setSnackbarVisibility(true);
      }
    }
  }

  return (
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
            subtitleStyle={{color: '#bbbbbb'}}
            subtitle={checkedTasks[index] ? verifiedTasks[index] ? 'Verified!' : 'Undergoing Verification...' : ''}
            checkBox={{
              checked: checkedTasks[index],
              onPress: () => (!checkedTasks[index] || verifiedTasks[index]) && toggleTaskCheck(index),
              checkedColor: !verifiedTasks[index] ? 'gray' : 'green'
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
                switch (index + 1) {
                  case 1:
                    return "gold";
                  case 2:
                    return "gray";
                  case 3:
                    return "brown";
                  default:
                    return "black";
                }
              };
              return (
                <ListItem
                  title={item.name}
                  subtitle={`@${item.handle}`}
                  leftAvatar={{
                    rounded: true,
                    title: `${index + 1}`,
                    overlayContainerStyle: {
                      backgroundColor: getBackgroundColor(),
                    },
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
      <Snackbar
        visible={snackbarVisibility}
        onDismiss={() => setSnackbarVisibility(false)}
        action={{
          label: "OK",
          onPress: () => {},
        }}
      >
        Sent image for verification.
      </Snackbar>
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
});

