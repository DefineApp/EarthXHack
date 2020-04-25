import React, {useContext} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import { ListItem } from "react-native-elements";
import challenges from "../data/challenges";
import ChallengeContext from "../contexts/challenge";
import ChallengeDetailsTaskListItem from "./ChallengeDetailsTaskListItem";

const userRanking = [
  { name: "Dragon He", handle: "abstractultra", tasks: 354 },
  { name: "Leon Si", handle: "leonzalion", tasks: 236 },
  { name: "Kevin Xu", handle: "theskillzrreal", tasks: 23 },
  { name: "Shivay Lamba", handle: "shivaylamba", tasks: 2 },
  { name: "Myhair Kaboom", handle: "mihir", tasks: -3 },
];

export default function ChallengeDetailsTaskList() {
  const { id: challengeId, endDate } = useContext(ChallengeContext);

  const tasks = challenges[challengeId].tasks;

  return (
    <View style={styles.tasks}>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <ChallengeDetailsTaskListItem item={item} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {endDate < new Date() ? (
        <View style={styles.ranking}>
          <View style={styles.rankingTitle}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Challenge is OVER!
            </Text>
          </View>
          <FlatList
            data={userRanking}
            renderItem={({ item, index }) => {
              const getBackgroundColor = () => {
                switch (index + 1) {
                  case 1:
                    return "gold";
                  case 2:
                    return "gray";
                  case 3:
                    return "brown";
                  default:
                    return "black";
                }
              };
              return (
                <ListItem
                  title={item.name}
                  subtitle={`@${item.handle}`}
                  leftAvatar={{
                    rounded: true,
                    title: `${index + 1}`,
                    overlayContainerStyle: {
                      backgroundColor: getBackgroundColor(),
                    },
                  }}
                  rightElement={
                    <>
                      <Text style={{ fontWeight: "bold" }}>
                        {item.tasks}
                      </Text>
                      <Text> tasks completed</Text>
                    </>
                  }
                  bottomDivider
                />
              );
            }}
            keyExtractor={(item) => item.handle}
          />
        </View>
      ) : null}
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

