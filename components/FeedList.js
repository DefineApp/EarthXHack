import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import FeedListItem from "../components/FeedListItem";
import FadeOverlay from "./FadeOverlay";

const items = [
  {
    name: 'Leon Si',
    handle: 'leonzalion',
    content: 'I just joined the challenge "Ultralearning"!'
  },
  {
    name: 'AbstractUltra',
    handle: 'abstractultra',
    content: 'Bananas don\'t grow on trees.'
  },
  {
    name: 'Apple',
    handle: 'apple',
    content: 'An apple a day keeps the doctor away!'
  },
  {
    name: 'Banana',
    handle: 'banana',
    content: 'Bananas grow on trees!'
  },
  {
    name: 'Apple',
    handle: 'apple',
    content: 'An apple a day keeps the doctor away!'
  },
  {
    name: 'Banana',
    handle: 'banana',
    content: 'Bananas grow on trees!'
  },
  {
    name: 'Apple',
    handle: 'apple',
    content: 'An apple a day keeps the doctor away!'
  },
  {
    name: 'Banana',
    handle: 'banana',
    content: 'Bananas grow on trees!'
  },
  {
    name: 'Apple',
    handle: 'apple',
    content: 'An apple a day keeps the doctor away!'
  },
  {
    name: 'Banana',
    handle: 'banana',
    content: 'Bananas grow on trees!'
  }
];

export default function FeedList() {
  const [fadeOpacity, setFadeOpacity] = useState(0);

  function handleScroll({ nativeEvent }) {
    if (nativeEvent.contentOffset.y <= 0) setFadeOpacity(0);
    else setFadeOpacity(1);
  }

  return (
    <View style={styles.container}>
      <FadeOverlay opacity={fadeOpacity} />
      <FlatList
        data={items}
        onScroll={handleScroll}
        renderItem={({item}) => (
          <FeedListItem
            name={item.name}
            handle={item.handle}
            content={item.content}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }
});
