import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChallengesActiveList from "../components/ChallengesActiveList";

/*
  name,
  description,
  startDate,
  endDate,
  tags,
  logoUrl,
  type
 */
export default function ChallengesActive() {
  return (
    <View style={styles.container}>
      <ChallengesActiveList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
