import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Drawer, Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import navigationRef from "./NavigationRef";

export default function DrawerContent() {
  const navigation = navigationRef.current;
  const [activeItem, setActiveItem] = useState("FeedScreen");
  function handlePageChange(pageName) {
    setActiveItem(pageName);
    navigation.navigate(pageName);
  }
  return (
    <SafeAreaView>
      <View style={styles.profileSummary}>
        <View>
          <Avatar.Image
            source={{
              uri:
                "https://media-exp1.licdn.com/dms/image/C4D03AQEUgiIGoubZSg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=8cd7oLeqjImne2aab1KtX_IqZZRP2dTbBK7ewgpa5HA",
            }}
            size={75}
          />
        </View>
        <View style={styles.profileText}>
          <Text style={{fontWeight:'bold', fontSize:25}}>Leon Si</Text>
          <Text>@LeonZaLion</Text>
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
    flexDirection: 'row'
  },
  profileText: {
    margin: 10,
    justifyContent: 'center'
  }
});
