import React, {useContext} from 'react';
import { FlatList } from 'react-native';
import challenges from "../data/challenges";
import ChallengeListItem from "../components/ChallengeListItem";
import UserContext from "../contexts/user";
import FadeOverlay from "../components/FadeOverlay";

export default function ChallengesActive() {
  const { user: { challenges: userChallenges } } = useContext(UserContext);

  return (
    <FadeOverlay style={{flex: 1}}>
      <FlatList
        data={Object.entries(userChallenges)}
        renderItem={({item: [itemId]}) => {
          const item = challenges[itemId];
          return <ChallengeListItem
            {...item}
            showTags={false}
            showProgressBar={true}
            showProgressCircle={true}
          />
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </FadeOverlay>
  );
}
