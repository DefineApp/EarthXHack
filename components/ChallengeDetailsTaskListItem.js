import React, {useContext, useState} from "react";
import {ListItem, Overlay} from "react-native-elements";
import {Snackbar} from "react-native-paper";
import ChallengeContext from "../contexts/challenge";
import * as ImagePicker from "expo-image-picker";
import UserContext from "../contexts/user";
import {useActionSheet} from "@expo/react-native-action-sheet";
import {StyleSheet, Text, View} from "react-native";

export default function ChallengeDetailsTaskListItem({ item, index }) {
  const { id: challengeId } = useContext(ChallengeContext);
  const { user, setUser, user: { challenges: userChallenges } } = useContext(UserContext);

  const { showActionSheetWithOptions } = useActionSheet();
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [overlayData, setOverlayData] = useState({});
  const verifiedTasks = userChallenges[challengeId]?.verifiedTasks || {};
  const checkedTasks = userChallenges[challengeId]?.checkedTasks || {};
  const [snackbarVisibility, setSnackbarVisibility] = useState(false);

  function toggleTaskCheck(key) {
    const options = ["Choose from Camera Roll", "Take Photo", "Cancel"];

    function handleImage(proofImage) {
      if (!proofImage.cancelled) {
        if (!checkedTasks[key]) {
          user.challenges[challengeId].checkedTasks[key] = true;
          setUser({...user});
        }
        setSnackbarVisibility(true);
      }
    }

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex: 2,
      },
      async (buttonIndex) => {
        if (buttonIndex === 0 || buttonIndex === 1) {
          if (buttonIndex === 0) {
            const cameraRollPermission = await ImagePicker.requestCameraRollPermissionsAsync();
            if (cameraRollPermission.granted) {
              const proofImage = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
              });
              handleImage(proofImage);
            }
          }
          if (buttonIndex === 1) {
            const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
            if (cameraPermission.granted) {
              const proofImage = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
              });
              handleImage(proofImage);
            }
          }
        }
      }
    );
  }

  return (
    <>
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
    </>

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

