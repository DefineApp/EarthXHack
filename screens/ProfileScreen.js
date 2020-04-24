import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function ProfileScreen() {
  return (
    <View style={styles.profileSummary}>
      <View style={styles.profileBasics}>
        <View>
          <Avatar.Image
            source={{
              uri:
                "https://media-exp1.licdn.com/dms/image/C4D03AQEUgiIGoubZSg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=8cd7oLeqjImne2aab1KtX_IqZZRP2dTbBK7ewgpa5HA",
            }}
            size={125}
          />
        </View>
        <View style={styles.profileText}>
          <Text style={{ fontWeight: "bold", fontSize: 35 }}>Leon Si</Text>
          <Text style={{ fontSize: 15 }}>@LeonZaLion</Text>
          <View style={styles.followerText}>
          <View style={styles.followColumn}>
            <Text style={styles.followCount}>2000</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.followColumn}>
            <Text style={styles.followCount}>2000</Text>
            <Text>Following</Text>
          </View>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileSummary: {
    padding: 20,
    flex: 1,
    alignItems: "center",
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
});
