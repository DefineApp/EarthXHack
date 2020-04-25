import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, SectionList} from 'react-native';
import FeedListItem from "../components/FeedListItem";
import FadeOverlay from "./FadeOverlay";
import feed from '../data/feed';
import { Divider } from 'react-native-elements';

export default function FeedList() {
  const [sectionedFeed, setSectionedFeed] = useState([]);
  const [fadeOpacity, setFadeOpacity] = useState(0);

  function handleScroll({ nativeEvent }) {
    if (nativeEvent.contentOffset.y <= 0) setFadeOpacity(0);
    else setFadeOpacity(1);
  }

  useEffect(() => {
    setSectionedFeed([
      {
        title: "New Updates",
        data: feed.filter((item) => item.new)
      },
      {
        title: "Recent Updates",
        data: feed.filter((item) => !item.new)
      }
    ])
  }, []);


  return (
    <View style={styles.container}>
      <FadeOverlay opacity={fadeOpacity} />
      <SectionList
        sections={sectionedFeed}
        stickySectionHeadersEnabled={false}
        onScroll={handleScroll}
        renderItem={({item, index, section}) => (
          <FeedListItem
            name={item.name}
            handle={item.handle}
            content={item.content}
            challengeId={item.challengeId}
            bottomDivider={index !== section.data.length - 1}
          />
        )}
        renderSectionHeader={({section: { title } }) => (
          <View style={{flex: -1}}>
            <View style={{
              flex: -1,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white'
            }}>
              <Divider style={{flexGrow: 1, marginHorizontal: 5}}/>
              <Text style={{color: '#c1c8ce'}}>{title}</Text>
              <Divider style={{flexGrow: 1, marginHorizontal: 5}}/>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
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
