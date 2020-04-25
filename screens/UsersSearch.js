import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import challenges from "../data/challenges";
import ChallengeListItem from "../components/ChallengeListItem";

export default function UsersSearch() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search for challenges..."
        onChangeText={setSearch}
        value={search}
        platform="ios"
      />
      <FlatList
        data={Object.entries(challenges)}
        renderItem={({item: [id, item]}) => {
          return <ChallengeListItem {...item} />
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
