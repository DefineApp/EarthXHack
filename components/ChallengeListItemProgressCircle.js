import React from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Progress from 'react-native-progress';

export default function ChallengeListItemProgressCircle({tasksDone, totalTasks}) {
  return (
    <Progress.Circle progress={totalTasks / tasksDone} />
  )
}
