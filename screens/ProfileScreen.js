import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import UserContext from "../contexts/user";

export default function ProfileScreen() {
  const {
    name,
    handle,
    followers,
    following,
    description,
    challenges,
    profilePicture,
  } = useContext(UserContext);
  return (
    <View style={styles.profileSummary}>
      <View style={styles.profileBasics}>
        <View>
          <Avatar.Image
            source={{
              uri: profilePicture,
            }}
            size={125}
          />
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
