import React, { useState, useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Drawer } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigationRef } from "./RootNavigation";
import UserContext from "../contexts/user";
import { Avatar } from 'react-native-elements';

export default function DrawerContent() {
  const navigation = navigationRef.current;

  const { name, handle, followers, following, challenges, profilePicture } = useContext(
    UserContext
  );
  const [activeItem, setActiveItem] = useState("FeedScreen");
  function handlePageChange(pageName) {
    setActiveItem(pageName);
    navigation.navigate(pageName);
  }
  return (
    <SafeAreaView>
      <View style={styles.profileSummary}>
        <View>
          <Avatar
            source={{ uri: profilePicture }}
            size={75}
            rounded
          />
        </View>
        <View style={styles.profileText}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>{name}</Text>
          <Text>@{handle}</Text>
        </View>
      </View>
      <View style={styles.drawerCategory}>
        <Drawer.Section title="You" />
        <Drawer.Item
          label="Feed"
          active={activeItem === "FeedScreen"}
          onPress={() => handlePageChange("FeedScreen")}
        />
        <Drawer.Item
          label="Profile"
          active={activeItem === "ProfileScreen"}
          onPress={() => handlePageChange("ProfileScreen")}
        />
      </View>
      <View style={styles.drawerCategory}>
        <Drawer.Section title="Challenges" />
        <Drawer.Item
          label="Past"
          active={activeItem === "PastChallengesScreen"}
          onPress={() => handlePageChange("PastChallengesScreen")}
        />
        <Drawer.Item
          label="Present"
          active={activeItem === "PresentChallengesScreen"}
          onPress={() => handlePageChange("PresentChallengesScreen")}
        />
        <Drawer.Item
          label="Upcoming"
          active={activeItem === "UpcomingChallengesScreen"}
          onPress={() => handlePageChange("UpcomingChallengesScreen")}
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
  profileSummary: {
    margin: 20,
    flexDirection: "row",
  },
  profileText: {
    margin: 10,
    justifyContent: "center",
  },
});
