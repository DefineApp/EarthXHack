import React from "react";
import { Text, View } from "react-native";

export default function ChallengeDetails({ route, navigation }) {
  const {
    name,
    description,
    startDate,
    endDate,
    tags,
    logoUrl,
    type,
  } = route.params;
  return (
    <View>
      <Text>{name}</Text>
      <Text>
        Begins: {startDate.getDate()}/{startDate.getMonth() + 1}/
        {startDate.getFullYear()}
      </Text>
      <Text>
        Ends: {endDate.getDate()}/{endDate.getMonth() + 1}/
        {endDate.getFullYear()}
      </Text>
      <Text>{description}</Text>
    </View>
  );
}
