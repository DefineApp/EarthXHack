import React from 'react';
import { FlatList } from 'react-native';
import ChallengeListItem from "../components/ChallengeListItem";
import FadeOverlay from "../components/FadeOverlay";
import useData from "../hooks/useData";

export default function ChallengesPast() {
  const challenges = useData('challenges', []);

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
