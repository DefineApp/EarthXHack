import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChallengesPastList from "../components/ChallengesPastList";

export default function ChallengesPast() {
  return (
    <View style={styles.container}>
      <ChallengesPastList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
