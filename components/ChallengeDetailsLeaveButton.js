import React, { useContext } from "react";
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import UserContext from "../contexts/user";
import ChallengeContext from "../contexts/challenge";
import {useNavigation} from "@react-navigation/core";

export default function ChallengeDetailsLeaveButton() {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const { id } = useContext(ChallengeContext);

  return (
    <View style={styles.leave}>
      <Button
        icon={{
          name: 'logout',
          type: 'simple-line-icon',
          color: 'white'
        }}
        iconContainerStyle={styles.iconContainer}
        onPress={() => {
          navigation.navigate("ChallengesSearch");
          delete user.challenges[id];
          setUser({...user});
        }}
        title="Leave Challenge..."
        containerStyle={styles.container}
        buttonStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  leave: {
    flex: -1,
    justifyContent: "flex-end"
  },
  iconContainer: {
    paddingRight: 5
  },
  container: {
    margin: 20
  },
  button: {
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'red'
  }
});
