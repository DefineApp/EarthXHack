import React from "react";
import {FlatList} from "react-native";
import ChallengeListItem from "./ChallengeListItem";

export default function ChallengeDetailsTaskList() {
  return (
    <FlatList
      data={Object.entries(challenges)}
      renderItem={({item: [id, item]}) => {
        return <ChallengeListItem {...item} />
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
