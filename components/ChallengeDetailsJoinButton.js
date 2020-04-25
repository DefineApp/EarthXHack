import React from "react";
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";

export default function ChallengeDetailsTaskList() {
  return (
    <View style={styles.join}>
      <Button
        icon={{
          name: 'login',
          type: 'antdesign',
          color: 'white'
        }}
        onPress={() => {}}
        title="Join Challenge!"
        containerStyle={{
          margin: 20
        }}
        buttonStyle={{
          height: 75,
          borderRadius: 20,
          justifyContent: 'center',
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  join: {
    flex: 1,
    justifyContent: "flex-end"
  }
});
