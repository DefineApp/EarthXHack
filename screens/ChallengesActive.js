import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import user from "../data/user";
import challenges from "../data/challenges";
import ChallengeListItem from "../components/ChallengeListItem";

export default function ChallengesActive() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Object.entries(user.challenges)}
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
