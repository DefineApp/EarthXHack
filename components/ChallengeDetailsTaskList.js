import React, {useContext, useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import ChallengeListItem from "./ChallengeListItem";
import {ListItem, Overlay} from "react-native-elements";
import {Snackbar} from "react-native-paper";
import challenges from "../data/challenges";
import ChallengeContext from "../contexts/challenge";
import * as ImagePicker from "expo-image-picker";
import UserContext from "../contexts/user";

export default function ChallengeDetailsTaskList() {
  const {id: challengeId} = useContext(ChallengeContext);
  const { user, setUser, user: { challenges: userChallenges } } = useContext(UserContext);

  const tasks = challenges[challengeId].tasks;
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [overlayData, setOverlayData] = useState({})

  const verifiedTasks = userChallenges[challengeId]?.verifiedTasks || {};
  const checkedTasks = userChallenges[challengeId]?.checkedTasks || {};

  const [snackbarVisibility, setSnackbarVisibility] = useState(false)

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

