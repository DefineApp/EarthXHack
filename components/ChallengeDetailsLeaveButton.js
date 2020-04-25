import React from "react";
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";

export default function ChallengeDetailsLeaveButton() {
  return (
    <View style={styles.leave}>
      <Button
        icon={{
          name: 'logout',
          type: 'simple-line-icon',
          color: 'white'
        }}
        iconContainerStyle={{
          paddingRight: 5
        }}
        onPress={() => {}}
        title="Leave Challenge..."
        containerStyle={{
          margin: 20
        }}
        buttonStyle={{
          height: 50,
          borderRadius: 20,
          justifyContent: 'center',
          backgroundColor: 'red'
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  leave: {
    flex: -1,
    justifyContent: "flex-end"
  }
});
