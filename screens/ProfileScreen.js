import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-elements";
import UserContext from "../contexts/user";
import challengeList from "../data/challenges";
import { FlatList } from "react-native-gesture-handler";
import ChallengeListItem from "../components/ChallengeListItem";

export default function ProfileScreen() {
  const [userChallenges, setUserChallenges] = useState([]);
  const {
    name,
    handle,
    followers,
    following,
    description,
    challenges,
    profilePicture,
  } = useContext(UserContext);
  function retrieveChallengesForUser() {
    let arr = [];
    for (let [key, value] of Object.entries(challenges)) {
      let obj = {
        id: key,
        tasksDone: value.tasksDone,
        name: challengeList[key].name,
        description: challengeList[key].description,
        startDate: challengeList[key].startDate,
        endDate: challengeList[key].endDate,
        tags: challengeList[key].tags,
        logoUrl: challengeList[key].logoUrl,
        type: challengeList[key].type,
        totalTasks: challengeList[key].totalTasks
      };
      arr.push(obj);
    }
    setUserChallenges(arr);
  }
  useEffect(() => {
    retrieveChallengesForUser();
  }, []);
  return (
    <View style={styles.profileSummary}>
      <View style={styles.profileBasics}>
        <View>
          <Avatar rounded source={{ uri: profilePicture }} size={125} />
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
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>Active Challenges</Text>
      </View>
      <FlatList
        data={userChallenges}
        renderItem={({ item }) => (
          <ChallengeListItem
            id={item.id}
            name={item.name}
            description={item.description}
            startDate={item.startDate}
            endDate={item.endDate}
            tags={item.tags}
            logoUrl={item.logoUrl}
            type={item.type}
            totalTasks={item.totalTasks}
            showProgressCircle
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
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
