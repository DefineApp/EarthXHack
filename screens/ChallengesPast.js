import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import challenges from "../data/challenges";
import ChallengeListItem from "../components/ChallengeListItem";

export default function ChallengesPast() {
  return (
    <View style={styles.container}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
