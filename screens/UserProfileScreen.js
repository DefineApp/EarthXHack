import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";
import { Avatar, SocialIcon } from "react-native-elements";
import UserContext from "../contexts/user";
import challengeList from "../data/challenges";
import ChallengeListItem from "../components/ChallengeListItem";
import TouchableScale from "react-native-touchable-scale";

export default function ProfileScreen({route, navigation}) {
  const [userChallenges, setUserChallenges] = useState([]);
  const {
      name,
      handle,
      followers,
      following,
      description,
      challenges,
      avatarUrl,
  } = route.params;

  function retrieveChallengesForUser() {
    let arr = [];
    for (let [key, value] of Object.entries(challenges)) {
      arr.push({
        id: key,
        tasksDone: value.tasksDone,
        ...challengeList[key]
      });
    }
    setUserChallenges(arr);
  }

  useEffect(() => {
    retrieveChallengesForUser();
  }, []);

  return (
    <ScrollView style={styles.profileSummary}>
      <View style={styles.profileBasics}>
        <View>
          <Avatar rounded source={{ uri: avatarUrl }} size={125} />
        </View>
        <View style={styles.profileText}>
          <Text style={{ fontWeight: "bold", fontSize: 35 }}>{name}</Text>
          <Text style={{ fontSize: 15 }}>@{handle}</Text>
          <View style={styles.followerText}>
            <View style={styles.followColumn}>
              <Text style={styles.followCount}>{followers}</Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.followColumn}>
              <Text style={styles.followCount}>{following}</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.profileMisc}>
        <Text style={{ fontWeight: "bold" }}>Description</Text>
        <Text>{description}</Text>
      </View>
      <View style={{
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20
      }}>
        {['twitter', 'instagram', 'facebook', 'youtube'].map((type, index) => {
          return <SocialIcon type={type} Component={TouchableScale} key={index} />
        })}
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>Active Challenges</Text>
      </View>
      <FlatList
        data={userChallenges}
        renderItem={({ item }) => (
          <ChallengeListItem
            {...item}
            showStartDate={false}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileSummary: {
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  },
  profileBasics: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    margin: 10,
    alignItems: "center",
  },
  followerText: {
    flexDirection: "row",
  },
  followColumn: {
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  followCount: {
    fontWeight: "bold",
    fontSize: 20,
  },
  profileMisc: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
});
