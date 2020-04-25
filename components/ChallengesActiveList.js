import React from "react";
import {FlatList} from "react-native";
import ChallengeListItem from "./ChallengeListItem";
import challenges from '../data/challenges';
import user from '../data/user';

export default function ChallengesActiveList() {
  return (
    <FlatList
      data={Object.entries(user.challenges)}
      renderItem={({item: [itemId]}) => {
        const item = challenges[itemId];
        console.log(item);
        return <ChallengeListItem
          {...item}
          tags={[]}
          showProgressBar={true}
          showProgressCircle={true}
        />
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
