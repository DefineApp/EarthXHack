import React, {useContext} from "react";
import * as Progress from 'react-native-progress';
import ChallengeContext from "../contexts/challenge";

export default function ChallengeListItemProgressBar() {
  let context;
  console.log('hi');
  const {startDate, endDate} = context = useContext(ChallengeContext);
  console.log(context);
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();

  const percentage = Math.min(1, (Date.now() - startTime) / (endTime - startTime));
  return <Progress.Bar progress={percentage} />
}
