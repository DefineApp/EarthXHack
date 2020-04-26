import React from 'react';
import { FlatList } from 'react-native';
import challenges from "../data/challenges";
import ChallengeListItem from "../components/ChallengeListItem";
import FadeOverlay from "../components/FadeOverlay";

export default function ChallengesPast() {
  return (
    <FadeOverlay style={{flex: 1}}>
      <FlatList
        data={Object.entries(challenges)}
        renderItem={({item: [, item]}) => {
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
    </FadeOverlay>
  );
}
