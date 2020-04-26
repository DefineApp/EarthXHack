import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import LoggedInUserContext from "../contexts/LoggedInUser"
import usePatchData from "../hooks/usePatchData";

export default function ProfileScreenFollowButton() {
  const { user: loggedInUser } = useContext(LoggedInUserContext);
  const patchUser = usePatchData(`users/${loggedInUser.id}`);

  return (
    <View style={{padding:30}}>
      <Button title="Follow" onPress={async () => {
        loggedInUser.following.push(id);
        await patchUser({following: loggedInUser.following});
      }} />
    </View>
  );
}
