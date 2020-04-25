import React from "react";
import {FlatList} from "react-native";
import ChallengeListItem from "./ChallengeListItem";
import challenges from '../data/challenges';

export default function ChallengesSearchList() {
  return (
    <FlatList
      data={challenges}
      renderItem={({item}) => {
        return <ChallengeListItem {...item} />
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
