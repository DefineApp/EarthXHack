import React, { useState, useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Drawer } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigationRef } from "./RootNavigation";
import UserContext from "../contexts/user";
import { Avatar } from "react-native-elements";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerContent({ navigation }) {
  const {
    name,
    handle,
    followers,
    following,
    challenges,
    profilePicture,
  } = useContext(UserContext);
  const [activeItem, setActiveItem] = useState("FeedScreen");
  function handlePageChange(pageName) {
    setActiveItem(pageName);
    navigation.navigate(pageName);
  }
  return (
    <SafeAreaView>
      <View style={styles.profile}>
        <View style={styles.profileSummary}>
          <View>
            <Avatar source={{ uri: profilePicture }} size={75} rounded />
          </View>
          <View style={styles.profileText}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>{name}</Text>
            <Text>@{handle}</Text>
          </View>
        </View>
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
      <View style={styles.drawerCategory}>
        <DrawerItem
          label="Feed"
          focused={activeItem === "FeedScreen"}
          onPress={() => handlePageChange("FeedScreen")}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="rss" color={color} size={size} />
          )}
        />
        <DrawerItem
          label="Profile"
          focused={activeItem === "ProfileScreen"}
          onPress={() => handlePageChange("ProfileScreen")}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )}
        />
        <DrawerItem
          label="Challenges"
          focused={activeItem === "ChallengesScreen"}
          onPress={() => handlePageChange("ChallengesScreen")}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="basketball"
              color={color}
              size={size}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  drawerCategory: {
    marginTop: 10,
    marginBottom: 10,
  },
  profile: {
    alignItems: 'center'
  },
  profileSummary: {
    margin: 20,
    flexDirection: "row",
  },
  profileText: {
    margin: 10,
    justifyContent: "center",
  },
  followerText: {
    flexDirection: "row",
  },
  followColumn: {
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10
  },
  followCount: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
