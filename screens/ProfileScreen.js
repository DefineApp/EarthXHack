import React, {useContext} from 'react';
import ProfileScreenSocialMediaButtons
  from "../components/ProfileScreenSocialMediaButtons";
import ProfileScreenFollowButton from "../components/ProfileScreenFollowButton";
import ProfileScreenActiveChallengesList
  from "../components/ProfileScreenActiveChallengesList";
import ProfileScreenUserInformation
  from "../components/ProfileScreenUserInformation";
import UserContext from "../contexts/User";
import LoggedInUserContext from "../contexts/LoggedInUser";

export default function ProfileScreen() {
  const { user } = useContext(UserContext);
  const { user: loggedInUser } = useContext(LoggedInUserContext);

  return (
    <ProfileScreenActiveChallengesList
      ListHeaderComponent={
        <>
          <ProfileScreenUserInformation />
          {user.id !== loggedInUser.id ?
            <ProfileScreenFollowButton/> :
            null
          }
          <ProfileScreenSocialMediaButtons />
        </>
      }
    />
  )
}
