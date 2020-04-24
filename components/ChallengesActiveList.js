import React from "react";
import {FlatList} from "react-native";
import ChallengeListItem from "./ChallengeListItem";
import challenges from '../data/challenges';

export default function ChallengesActiveList({ avatarUrl, name, handle, content }) {
  return (
    <FlatList
      data={challenges}
      renderItem={({item}) =>
        <ChallengeListItem {...item} showProgress={true} />
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
