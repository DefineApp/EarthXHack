import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import LoggedInUserContext from "../contexts/LoggedInUser";
import UserContext from "../contexts/User";
import usePatchData from "../hooks/usePatchData";

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
            await setLoggedInUser({
              ...loggedInUser,
              ['following']: loggedInUser.following.concat(user.id),
            });
            await patchUser({ following: loggedInUser.following });
          }}
        />
      ) : (
        <Button
          title="Unfollow"
          onPress={async () => {
            const targetIndex = loggedInUser.following.indexOf(user.id);
            loggedInUser.following.splice(targetIndex, 1);
            await patchUser({ following: loggedInUser.following });
          }}
        />
      )}
    </View>
  );
}
