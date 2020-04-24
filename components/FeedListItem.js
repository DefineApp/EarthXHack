import React from "react";
import {Avatar, ListItem} from 'react-native-elements';
import {Text, View} from "react-native";

export default function FeedListItem({ avatarUrl, name, handle, content }) {

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
      bottomDivider={true}
    />
  );
}
