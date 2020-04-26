import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import challenges from "../data/challenges";
import ChallengeListItem from "../components/ChallengeListItem";

export default function ChallengesSearch() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search for challenges..."
        onChangeText={setSearch}
        inputContainerStyle={{backgroundColor: 'white'}}
        value={search}
        platform="ios"
      />
      <View style={{flex: 1, position: 'relative'}}>

        <FlatList
          data={Object.entries(challenges)}
          renderItem={({item: [, item]}) => {
            return <ChallengeListItem {...item} />
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
