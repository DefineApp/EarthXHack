import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList, Linking } from "react-native";
import { Avatar, SocialIcon, Button } from "react-native-elements";
import UserContext from "../contexts/User";
import LoggedInUserContext from "../contexts/LoggedInUser"
import ChallengeListItem from "../components/ChallengeListItem";
import TouchableScale from "react-native-touchable-scale";
import useGetData from "../hooks/useGetData";
import usePutData from "../hooks/usePutData";
import Loading from "../components/Loading";
import useLazyGetData from "../hooks/useLazyGetData";

function ProfileScreenUserInformation() {
  const { user: loggedInUser } = useContext(LoggedInUserContext);
  const { user } = useContext(UserContext);
  const putLoggedInUser = usePutData(`users/${loggedInUser.id}`);
  const putUser = usePutData(`users/${user.id}`);

  return (
    <View style={styles.profileBasicsContainer}>
      <View style={styles.profileBasics}>
        <View>
          <Avatar rounded source={{ uri: user.avatarUrl }} size={125} />
        </View>
        <View style={styles.profileText}>
          <Text style={{ fontWeight: "bold", fontSize: 35 }}>{user.name}</Text>
          <Text style={{ fontSize: 15 }}>@{user.handle}</Text>
          <View style={styles.followerText}>
            <View style={styles.followColumn}>
              <Text style={styles.followCount}>{user.followers.length}</Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.followColumn}>
              <Text style={styles.followCount}>{user.following.length}</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.profileMisc}>
        <Text style={{ fontWeight: "bold" }}>Description</Text>
        <Text>{user.description}</Text>
      </View>
      <View style={{padding:30}}>
        <Button title="Follow" onPress={async () => {
          loggedInUser.following.push(user.id);
          user.followers.push(loggedInUser.id);
          await putLoggedInUser(loggedInUser);
          await putUser(user);
        }} />
      </View>
      <View
        style={{
          flex: -1,
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 20,
        }}
      >
        {user.socialMedia.map(({type, url}, index) => {
          return (
            <SocialIcon
              type={type}
              Component={TouchableScale}
              onPress={async () => {await Linking.openURL(url)}}
              key={index}
            />
          );
        })}
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>
          Active Challenges
        </Text>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  const [userChallenges, setUserChallenges] = useState([]);
  const { user } = useContext(UserContext);
  const getChallenge = useLazyGetData('challenges');

  useEffect(() => {
    (async () => {
      let arr = [];
      for (let [key, value] of Object.entries(user.challenges)) {
        const challenge = await getChallenge(`/${value.id}`);
        arr.push({...challenge, tasksDone: value.tasksDone});
      }
      setUserChallenges(arr);
    })();
  }, [userChallenges]);

  return (
    <FlatList
      style={styles.profileSummary}
      ListHeaderComponent={<ProfileScreenUserInformation user={user} />}
      ListFooterComponent={<View style={{ marginBottom: 20 }} />}
      data={userChallenges}
      renderItem={({ item }) => {
        return <ChallengeListItem {...item} showStartDate={false} />
      }}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  profileSummary: {
    flex: 1,
    backgroundColor: "white",
  },
  profileBasicsContainer: {
    marginTop: 20,
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
