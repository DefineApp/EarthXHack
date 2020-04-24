import React from "react";
import * as Progress from 'react-native-progress';

export default function ChallengeListItemProgressCircle({tasksDone, totalTasks}) {
  return (
    <Progress.Circle progress={totalTasks / tasksDone} />
  )
}
