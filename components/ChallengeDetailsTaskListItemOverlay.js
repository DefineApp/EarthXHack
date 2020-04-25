import React from "react";
import {Overlay} from "react-native-elements";
import {StyleSheet, Text, View} from "react-native";

export default function ChallengeDetailsTaskListItemOverlay({ data, visibility }) {

  return (
    <Overlay
      isVisible={visibility}
      onBackdropPress={() => visibility(false)}
      height="auto"
    >
      <View style={styles.overlayStyle}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {data.title}
          </Text>
        </View>
        <Text style={{ paddingTop: 10 }}>{data.description}</Text>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlayStyle: {
    margin: 10,
  },
  ranking: {},
  rankingTitle: {
    alignItems: "center",
  },
});

