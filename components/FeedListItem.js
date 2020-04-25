import React from "react";
import {Avatar, ListItem} from 'react-native-elements';
import {Text, View} from "react-native";
import challenges from "../data/challenges"
import {useNavigation} from "@react-navigation/native"

export default function FeedListItem({ avatarUrl, name, handle, content, challengeId, ...props }) {
  const navigation = useNavigation();
  return (
    <ListItem
      leftElement={
        <View style={{height: '100%'}}>
          <Avatar
            source={avatarUrl && {uri: avatarUrl}}
            title={name[0]}
            rounded
          />
        </View>
      }
      contentContainerStyle={{height: '100%', flex: -1, justifyContent: 'flex-start'}}
      title={
        <View>
          <Text style={{fontWeight: 'bold'}}>{name}</Text>
          <Text style={{color: 'gray'}}>{`@${handle}`}</Text>
        </View>
      }
      subtitle={content}
      containerStyle={{height: 100}}
      {...props}
      onPress={() => navigation.push("ChallengeDetails", {
        id: challengeId,
        name: challenges[challengeId].name,
        description: challenges[challengeId].description,
        startDate: challenges[challengeId].startDate,
        endDate: challenges[challengeId].endDate,
        tags: challenges[challengeId].tags,
        logoUrl: challenges[challengeId].logoUrl,
        type: challenges[challengeId].type,
      })}
    />
  );
}
