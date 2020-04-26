import React, {useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import { Surface } from 'react-native-paper';
import { SearchBar, ListItem } from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import TouchableScale from "react-native-touchable-scale";
import useGetData from "../hooks/useGetData";

export default function UsersSearch() {
  const [search, setSearch] = useState("");
  const users = useGetData('users', []);

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
        data={users}
        renderItem={({ item }) => {
          return (
            <Surface style={styles.surface}>
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100}
                activeScale={0.95}
                containerStyle={{borderRadius: 20}}
                leftAvatar={{ rounded: true, source: { uri: item.avatarUrl } }}
                title={item.name}
                subtitle={`@${item.handle}`}
                onPress={() => {navigation.push("UsersProfile", item)}}
                chevron={true}
              />
            </Surface>
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
  surface: {
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 5,
    elevation: 1
  }
});
