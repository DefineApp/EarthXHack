import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SearchBar, ListItem } from "react-native-elements";
import users from "../data/users";
import {useNavigation} from "@react-navigation/native";

export default function UsersSearch() {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search for users..."
        onChangeText={setSearch}
        value={search}
        platform="ios"
      />
      <FlatList
        data={Object.entries(users)}
        renderItem={({ item: [id, item] }) => {
          return (
            <ListItem
              leftAvatar={{ rounded: true, title: item.name[0] }}
              title={item.name}
              subtitle={`@${item.handle}`}
              onPress={() => {navigation.push("UsersProfile", item)}}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
