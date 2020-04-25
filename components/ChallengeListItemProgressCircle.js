import React, {useContext} from "react";
import * as Progress from 'react-native-progress';
import UserContext from "../contexts/user";
import ChallengeContext from "../contexts/challenge";
import ProgressCircle from 'react-native-progress-circle';
import {Text, View} from "react-native";

export default function ChallengeListItemProgressCircle() {
  const { totalTasks, id: challengeId } = useContext(ChallengeContext);
  const { user: { challenges: { [challengeId]: { tasksDone } } } } = useContext(UserContext);


  return (
    <ProgressCircle
      radius={50}
      borderWidth={5}
      percent={tasksDone / totalTasks * 100}
    >
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>{tasksDone} / {totalTasks}</Text>
        <Text>Tasks</Text>
      </View>
    </ProgressCircle>
  );
}
