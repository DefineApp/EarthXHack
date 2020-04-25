import React, {useContext} from "react";
import * as Progress from 'react-native-progress';
import { View } from 'react-native';
import ChallengeContext from "../contexts/challenge";

export default function ChallengeListItemProgressBar() {
  const context = useContext(ChallengeContext);

  const {startDate, endDate} = context;

  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const percentage = Math.min(1, (Date.now() - startTime) / (endTime - startTime));

  return <Progress.Bar progress={percentage} width={null} />
}
