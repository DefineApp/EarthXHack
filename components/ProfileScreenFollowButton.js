import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import LoggedInUserContext from "../contexts/LoggedInUser";
import UserContext from "../contexts/User";
import usePatchData from "../hooks/usePatchData";
import {Ionicons} from "@expo/vector-icons"

export default function ProfileScreenFollowButton() {
  const { user: loggedInUser, setUser: setLoggedInUser } = useContext(
    LoggedInUserContext
  );
  const { user } = useContext(UserContext);
  const patchUser = usePatchData(`users/${loggedInUser.id}`);

  return (
    <View style={{ padding: 30 }}>
      {!loggedInUser.following.includes(user.id) ? (
        <Button
          title="Follow"
          onPress={async () => {
            const following = loggedInUser.following.concat(user.id);
            await patchUser({ following });
            setLoggedInUser({ ...loggedInUser, following });
          }}
        />
      ) : (
        <Button
          title="Unfollow"
          type="outline"
          onPress={async () => {
            const following = loggedInUser.following.slice(
              0,
              loggedInUser.following.length
            );
            const targetIndex = following.indexOf(user.id);
            following.splice(targetIndex, 1);
            await patchUser({ following: following });
            setLoggedInUser({ ...loggedInUser, following });
          }}
        />
      )}
    </View>
  );
}
