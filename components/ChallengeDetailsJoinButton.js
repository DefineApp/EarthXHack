import React from "react";
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";

export default function ChallengeDetailsTaskList() {
  return (
    <View style={styles.join}>
      <Button
        icon={{
          name: 'login',
          type: 'simple-line-icon',
          color: 'white'
        }}
        iconContainerStyle={{
          paddingRight: 5
        }}
        onPress={() => {}}
        title="Join Challenge!"
        containerStyle={{
          margin: 20
        }}
        buttonStyle={{
          height: 50,
          borderRadius: 20,
          justifyContent: 'center',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  join: {
    flex: -1,
    justifyContent: "flex-end"
  }
});