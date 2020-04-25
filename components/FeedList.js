import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import FeedListItem from "../components/FeedListItem";
import FadeOverlay from "./FadeOverlay";
import feed from '../data/feed';

export default function FeedList() {
  const [sectionedFeed, setSectionedFeed] = useState([]);
  const [fadeOpacity, setFadeOpacity] = useState(0);

  function handleScroll({ nativeEvent }) {
    if (nativeEvent.contentOffset.y <= 0) setFadeOpacity(0);
    else setFadeOpacity(1);
  }

  return (
    <View style={styles.container}>
      <FadeOverlay opacity={fadeOpacity} />
      <FlatList
        data={feed}
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
