import React, {useContext} from "react";
import * as Progress from 'react-native-progress';
import UserContext from "../contexts/user";
import ChallengeContext from "../contexts/challenge";

export default function ChallengeListItemProgressCircle() {
  const { totalTasks, id: challengeId } = useContext(ChallengeContext);
  const { user: { [challengeId]: { tasksDone } } } = useContext(UserContext);

  return (
    <Progress.Circle progress={totalTasks / tasksDone} />
  );
}
