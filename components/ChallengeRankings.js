import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import { ListItem } from "react-native-elements";

const userRanking = [
  { name: "Dragon He", handle: "abstractultra", tasks: 354 },
  { name: "Leon Si", handle: "leonzalion", tasks: 236 },
  { name: "Kevin Xu", handle: "theskillzrreal", tasks: 23 },
  { name: "Shivay Lamba", handle: "shivaylamba", tasks: 2 },
  { name: "Myhair Kaboom", handle: "mihir", tasks: -3 },
];
const rankingColors = ['gold', 'gray', 'brown'];

export default function ChallengeRankings(props) {
  return (
    <View style={styles.ranking}>
      <View style={styles.rankingTitle}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Challenge is OVER!
        </Text>
      </View>
      <FlatList
        {...props}
        data={userRanking}
        renderItem={({ item, index }) => (
          <ListItem
            title={item.name}
            subtitle={`@${item.handle}`}
            leftAvatar={{
              rounded: true,
              title: `${index + 1}`,
              overlayContainerStyle: {
                backgroundColor: rankingColors[index] || 'black',
              },
            }}
            rightElement={
              <>
                <Text style={{ fontWeight: "bold" }}>{item.tasks}</Text>
                <Text> tasks completed</Text>
              </>
            }
            bottomDivider
          />
        )}
        keyExtractor={(item) => item.handle}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  basicInfo: {
    alignItems: "center",
    padding: 20,
  },
  tasks: {
    flex: 1,
  },
  textContainer: {
    flex: -1,
    flexDirection: "row",
  },
  dateContainer: {
    flex: -1,
    margin: 5,
  },
  overlayStyle: {
    margin: 10,
  },
  ranking: {},
  rankingTitle: {
    alignItems: "center",
  },
});

