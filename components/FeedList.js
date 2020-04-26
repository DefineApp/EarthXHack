import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, SectionList } from "react-native";
import FeedListItem from "../components/FeedListItem";
import FadeOverlay from "./FadeOverlay";
import feed from "../data/feed";
import users from "../data/users";
import { Divider } from "react-native-elements";

export default function FeedList() {
  const [sectionedFeed, setSectionedFeed] = useState([]);
  const [userList, setUserList] = useState({});

  useEffect(() => {
    setSectionedFeed([
      {
        title: "New Updates",
        data: feed.filter((item) => item.new),
      },
      {
        title: "Recent Updates",
        data: feed.filter((item) => !item.new),
      },
    ]);
    for (let [key, value] of Object.entries(users)) {
      setUserList({ ...userList, [value.handle]: value });
    }
  }, []);

  return (
    <FadeOverlay>
      <SectionList
        sections={sectionedFeed}
        stickySectionHeadersEnabled={false}
        renderItem={({ item, index, section }) => (
          <FeedListItem
            name={item.name}
            handle={item.handle}
            content={item.content}
            challengeId={item.challengeId}
            avatarUrl={
              userList[item.handle] ? userList[item.handle].avatarUrl : null
            }
            bottomDivider={index !== section.data.length - 1}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ flex: -1 }}>
            <View
              style={{
                flex: -1,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Divider style={{ flexGrow: 1, marginHorizontal: 5 }} />
              <Text style={{ color: "#c1c8ce" }}>{title}</Text>
              <Divider style={{ flexGrow: 1, marginHorizontal: 5 }} />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </FadeOverlay>
  );
}
