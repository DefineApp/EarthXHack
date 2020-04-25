import React from "react";
import {FlatList} from "react-native";
import ChallengeListItem from "./ChallengeListItem";
import challenges from '../data/challenges';

export default function ChallengesActiveList() {
  return (
    <FlatList
      data={challenges}
      renderItem={({item}) =>
        <ChallengeListItem
          {...item}
          showProgressBar={true}
        />
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
