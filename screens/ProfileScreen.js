import React from 'react';
import ProfileScreenSocialMediaButtons
  from "../components/ProfileScreenSocialMediaButtons";
import ProfileScreenFollowButton from "../components/ProfileScreenFollowButton";
import ProfileScreenActiveChallengesList
  from "../components/ProfileScreenActiveChallengesList";
import ProfileScreenUserInformation
  from "../components/ProfileScreenUserInformation";

export default function ProfileScreen() {
  return (
    <ProfileScreenActiveChallengesList
      ListHeaderComponent={
        <>
          <ProfileScreenUserInformation />
          <ProfileScreenFollowButton />
          <ProfileScreenSocialMediaButtons />
        </>
      }
    />
  )
}
