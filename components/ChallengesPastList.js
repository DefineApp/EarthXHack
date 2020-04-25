import React from "react";
import {FlatList} from "react-native";
import ChallengeListItem from "./ChallengeListItem";
import challenges from '../data/challenges';

export default function ChallengesSearchList() {
  return (
    <FlatList
      data={Object.entries(challenges)}
      renderItem={({item: [id, item]}) => {
        if (item.endDate < new Date()) {
          return (
            <ChallengeListItem {...item} /> 
          );
        } else {
          return null;
        }
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
