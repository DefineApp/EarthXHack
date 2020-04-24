import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import ChallengesSearchList from "../components/ChallengesSearchList";

export default function ChallengesSearch() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search for challenges..."
        onChangeText={setSearch}
        value={search}
        platform="ios"
      />
      <ChallengesSearchList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
