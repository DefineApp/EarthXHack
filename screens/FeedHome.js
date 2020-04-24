import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo-linear-gradient";
import FeedList from "../components/FeedList";
import UserContext from "../contexts/user";

export default function FeedHome() {
  const {
    name,
    handle,
    followers,
    following,
    challenges,
    profilePicture,
  } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <ListItem
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={{
          colors: ["#FF9800", "#F44336"],
          start: [1, 0],
          end: [0.2, 0],
        }}
        leftAvatar={
          !profilePicture
            ? { rounded: true, title: name[0] }
            : { source: { uri: profilePicture } }
        }
        title={name}
        titleStyle={{ color: "white", fontWeight: "bold" }}
        subtitleStyle={{ color: "white" }}
        containerStyle={{ borderRadius: 10, margin: 20 }}
        subtitle={`@${handle}`}
        chevron={{ color: "white" }}
      />
      <FeedList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
