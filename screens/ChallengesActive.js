import React, {useContext} from 'react';
import { FlatList } from 'react-native';
import ChallengeListItem from "../components/ChallengeListItem";
import LoggedInUserContext from "../contexts/LoggedInUser";
import FadeOverlay from "../components/FadeOverlay";
import useGetData from "../hooks/useGetData";
import Loading from "../components/Loading";

export default function ChallengesActive() {
  const challenges = useGetData('challenges');
  const { user: { challenges: userChallenges } } = useContext(LoggedInUserContext);

  if (!challenges) return <Loading />;

  return (
    <FadeOverlay style={{flex: 1}}>
      <FlatList
        data={Object.entries(userChallenges)}
        renderItem={({item: [itemId]}) => {
          return <ChallengeListItem
            id={itemId}
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
